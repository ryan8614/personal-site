'use client'

import Navbar from "../components/Navbar";

export default function Page() {

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-4 py-10 bg-background text-foreground">
        {/* Outer container: column on small screens, row on medium and above */}
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar: hidden on small screens, shown from md breakpoint */}
          <aside className="hidden md:block md:basis-1/4 md:shrink-0">
            <div className="space-y-6">
              
              {/* Profile photo */}
              <img
                src="/images/photo.jpg" /* Replace this with your image path */
                alt="Profile photo"
                className="aspect-square w-full rounded-2xl object-cover border"
              />

              {/* Contact info card */}
              <section className="rounded-2xl border p-4">
                <h2 className="text-sm font-semibold opacity-80">Contact</h2>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>Email: <a href="mailto:yike8614@gmail.com" className="underline underline-offset-4">yike8614@gmail.com</a></li>
                  <li>Location: Perth, WA</li>
                  <li>GitHub: <a href="https://github.com/ryan8614" className="underline underline-offset-4">ryan8614</a></li>
                  <li>LinkedIn: <a href="https://www.linkedin.com/in/ryan-chang8614" className="underline underline-offset-4">/in/ryan-chang8614</a></li>
                </ul> 
              </section>

              {/* Skills pill list */}
              <section className="rounded-2xl border p-4">
                <h2 className="text-sm font-semibold opacity-80">Skills</h2>
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full border px-3 py-1">Next.js</span>
                  <span className="rounded-full border px-3 py-1">Tailwind</span>
                  <span className="rounded-full border px-3 py-1">Prisma</span>
                  <span className="rounded-full border px-3 py-1">AWS</span>
                  <span className="rounded-full border px-3 py-1">Python</span>
                </div>
              </section>
            </div>
          </aside>

          {/* Main content: full-width on small screens, 3/4 width on md and above */}
          <section className="flex-1 min-w-0 space-y-8">
            
            {/* Name and intro */}
            <header className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">Ryan Chang</h1>
              <p className="opacity-80">Software Developer · Perth, WA · Open to opportunities</p>
            </header>

            {/* Summary */}
            <section className="rounded-2xl border p-5">
              <h2 className="text-lg font-semibold">Summary</h2>
              <p className="mt-3 leading-relaxed">
                Full-stack developer skilled in Next.js, Python and AWS, with hands-on experience delivering dynamic web platforms 
                focused on scalability, reliability, and clean UI performance.
              </p>
            </section>

            {/* Experience section */}
            <section className="rounded-2xl border p-5">
              <h2 className="text-lg font-semibold">Experience</h2>
              <div className="mt-4 space-y-6">
                <article>
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-semibold">Backend Developer · Anheng Information Technology</h3>
                    <span className="text-sm opacity-70">2022 — 2023</span>
                  </div>
                  <p className="mt-2 text-sm opacity-90">
                    Django REST API + Kafka data pipeline for real-time cybersecurity event ingestion.
                  </p>
                  <ul className="mt-2 list-disc pl-5 text-sm">
                    <li>RESTful API design with Django REST Framework + drf-spectacular</li>
                    <li>Kafka consumers streaming events into PostgreSQL</li>
                  </ul>
                </article>

                <article>
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-semibold">Capstone · UWA “Office Contact”</h3>
                    <span className="text-sm opacity-70">2025</span>
                  </div>
                  <p className="mt-2 text-sm opacity-90">
                    Next.js + Prisma + PostgreSQL + Vercel app syncing Excel-based contact lists & floor plans.
                  </p>
                  <ul className="mt-2 list-disc pl-5 text-sm">
                    <li>Handsontable front-end with mergeable cells & map overlays.</li>
                    <li>Auth, notifications, Excel↔JSON pipelines.</li>
                  </ul>
                </article>
              </div>
            </section>

            {/* Education section */}
            <section className="rounded-2xl border p-5">
              <h2 className="text-lg font-semibold">Education</h2>
              <ul className="mt-4 space-y-6 text-sm">

                {/* Master's Degree */}
                <li>
                  <div className="flex items-baseline justify-between gap-4">
                    <span>Master of Information Technology — UWA</span>
                    <span className="opacity-70">Jul 2023 — Jun 2025</span>
                  </div>
                  <div className="opacity-80">GPA 6.38 / 7.0 · WAM 77.6 / 100</div>
                  <ul className="list-disc ml-4 mt-1 opacity-80 space-y-1">
                    <li>Core units: Python (90), OOP (86), Capstone (86)</li>
                    <li>Awarded Global Excellence Scholarship (2023)</li>
                  </ul>
                </li>

                {/* Bachelor's Degree */}
                <li>
                  <div className="flex items-baseline justify-between gap-4">
                    <span>Bachelor of Information Security — HDU</span>
                    <span className="opacity-70">Sep 2019 — Jun 2023</span>
                  </div>
                  <div className="opacity-80">GPA 3.69 / 4.0 · AVG 81.9 / 100</div>
                  <ul className="list-disc ml-4 mt-1 opacity-80 space-y-1">
                    <li>Core units: Computer Network (89), Security Testing & Evaluation (92)</li>
                  </ul>
                </li>

              </ul>
            </section>

            {/* Projects section */}
            <section className="rounded-2xl border p-5">
              <h2 className="text-lg font-semibold">Projects</h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <strong>IoT Smart Doorbell</strong> — Raspberry Pi, Cloudflare Tunnel, Cloudinary, Drizzle-ORM.
                </li>
                <li>
                  <strong>NovaMint</strong> — NFT marketplace on Next.js + Prisma + PostgreSQL.
                </li>
              </ul>
            </section>
          </section>
        </div>
      </main>


    </div>
  );
}