'use client';

import { useEffect, useState } from 'react';

type Language = {
  name: string;
  percent: number;
};

type SiteData = {
  visitors: number;
  stars: number;
  lastUpdated: string;
  languages: Language[];
};

export default function SiteStatus() {
  const [data, setData] = useState<SiteData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/site')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <div className="text-sm text-red-600">Failed to load site status.</div>;
  }

  if (!data) {
    return <div className="text-sm opacity-70">Loading site status…</div>;
  }

  const updated = new Date(data.lastUpdated);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">

        <div className="rounded-2xl border p-3 border-border shadow-md">
          <div className="opacity-70">Visitors</div>
          <div className="text-lg font-semibold">
            {data.visitors.toLocaleString()}
          </div>
        </div>

        <div className="rounded-2xl border p-3 border-border shadow-md ">
          <div className="opacity-70">GitHub Stars</div>
          <a
            href="https://github.com/ryan8614/personal-site"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold hover:underline"
          >
            {data.stars.toLocaleString()}
          </a>
        </div>

        <div className="rounded-2xl border p-3 border-border shadow-md">
          <div className="opacity-70">Last updated</div>
          <div className="text-lg font-semibold">
            {updated.toLocaleString()}
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {data.languages.map((l) => (
          <div key={l.name}>
            <div className="flex justify-between text-sm">
              <span>{l.name}</span>
              <span>{l.percent}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded">
              <div
                className="h-2 rounded bg-blue-500"
                style={{ width: `${l.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}