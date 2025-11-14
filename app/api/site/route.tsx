// app/api/site/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'crypto';

export const dynamic = 'force-dynamic'; // Avoid static optimization

const REPO = process.env.GITHUB_REPO ?? 'ryan8614/personal-site';
const GH = 'https://api.github.com';

// Counter
const g = globalThis as unknown as {
    __VISITOR_COUNT__?: number;
};
if (typeof g.__VISITOR_COUNT__ !== 'number') {
    g.__VISITOR_COUNT__ = 0;
}
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

    const visitorCookie = req.cookies.get('site_visitor_id');
    let isNewVisitor = false;

    if (!visitorCookie) {
        // New visitor
        isNewVisitor = true;
        g.__VISITOR_COUNT__ = (g.__VISITOR_COUNT__ ?? 0) + 1;
    }

    const gh = await fetchGitHub();

    // Return response
    const res = NextResponse.json(
        {
            visitors: g.__VISITOR_COUNT__,
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

    // Set visitor cookie
    if (isNewVisitor) {
        res.cookies.set('site_visitor_id', randomUUID(), {
        httpOnly: true,
        sameSite: 'lax',
        secure: true,
        path: '/',
        maxAge: 60 * 60 * 24 * 365, // 1 year
        });
    }

    return res;
}