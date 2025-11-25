// app/api/site/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'crypto';
import { prisma } from '@/lib/prisma';

const REPO = process.env.GITHUB_REPO ?? 'ryan8614/personal-site';
const GH = 'https://api.github.com';

// Tool: pull Github data（stars / last updated / languages）
async function fetchGitHub() {
    const headers: Record<string, string> = {
        Accept: 'application/vnd.github+json',
    };
    if (process.env.GITHUB_TOKEN) {
        headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    // 1) repo basic info
    const repoRes = await fetch(`${GH}/repos/${REPO}`, { 
        headers, 
        next: { revalidate: 600 },
    });
    if (!repoRes.ok) {
        const msg = await repoRes.text();
        throw new Error(`Failed to fetch repo: ${repoRes.status} ${msg}`);
    }
    const repo = await repoRes.json();

    // 2) languages breakdown
    const langRes = await fetch(`${GH}/repos/${REPO}/languages`, { 
        headers, 
        next: { revalidate: 600 },
    });
    if (!langRes.ok) {
        const msg = await langRes.text();
        throw new Error(`Failed to fetch languages: ${langRes.status} ${msg}`);
    }
    const langs = (await langRes.json()) as Record<string, number>;

    const total = Object.values(langs).reduce((a, b) => a + b, 0) || 1;
    const breakdown = Object.entries(langs)
        .map(([name, bytes]) => ({ name, percent: +((bytes / total) * 100).toFixed(1) }))
        .sort((a, b) => b.percent - a.percent);

    return {
        stars: repo.stargazers_count as number,
        lastUpdated: repo.pushed_at as string, // ISO string
        languages: breakdown,
    };
}

export async function GET(req: NextRequest) {
  const cookie = req.cookies.get('siteVisitorId');
  let visitorId = cookie?.value;
  let isNewVisitor = false;

  // 1) read current total count from the database
  let visitorCount = 0;
  try {
    visitorCount = await prisma.visitor.count();
  } catch (err) {
    console.error('Failed to count visitors:', err);
  }

  // 2) handle new visitor: persist to DB and bump count for this response
  if (!visitorId) {
    isNewVisitor = true;
    visitorId = randomUUID();

    try {
      await prisma.visitor.create({
        data: {
          siteVisitorId: visitorId,
        },
      });
      // reflect this new visitor in the current response
      visitorCount += 1;
    } catch (err) {
      console.error('Failed to create visitor record:', err);
    }
  }

  // 3) fetch GitHub data
  const gh = await fetchGitHub();

  // 4) build response using cached/updated visitorCount
  const res = NextResponse.json(
    {
      visitors: visitorCount,
      stars: gh.stars,
      lastUpdated: gh.lastUpdated,
      languages: gh.languages,
    },
    {
      headers: {
        'Cache-Control': 'public, s-maxage=30, stale-while-revalidate=120',
      },
    },
  );

  // 5) set cookie for new visitor
  if (isNewVisitor && visitorId) {
    res.cookies.set('siteVisitorId', visitorId, {
      httpOnly: true,
      sameSite: 'lax',
      secure: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });
  }

  return res;
}