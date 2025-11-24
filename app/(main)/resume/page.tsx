'use client'

export default function Page() {

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Main content */}
      <main className="max-w-8xl mx-auto px-4 py-10 bg-background text-foreground">
        {/* Outer container: column on small screens, row on medium and above */}
        <div className="flex flex-col md:flex-row gap-8 w-2/3 mx-auto">

          {/* Main content */}
          <section className="flex-1 min-w-0 space-y-8">
            
            {/* Name and intro */}
            <header className="space-y-2 md:space-y-0 md:flex md:items-end md:justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Ryan Chang</h1>
                <p className="opacity-80 text-sm md:text-base">
                  Software Developer · Perth, WA · Open to opportunities
                </p>
              </div>

              {/* Download PDF button */}
              <a
                href="/resume.pdf"  
                download
                className="mt-2 inline-flex items-center rounded-full border border-border px-4 py-1.5 text-sm font-medium hover:bg-gray-100 transition"
              >
                Download PDF
              </a>
            </header>

            {/* Summary */}
            <section className="rounded-2xl border p-5 border-border shadow-md">
              <h2 className="text-lg font-semibold">Summary</h2>
              <p className="mt-3 leading-relaxed text-sm">
                Full-stack developer skilled in Next.js, Python and AWS, with hands-on experience 
                delivering dynamic web platforms focused on scalability, reliability, and clean UI performance.
              </p>
            </section>

            {/* Skills section */}
            <section className="rounded-2xl border p-5 border-border shadow-md">
              <h2 className="text-lg font-semibold">Skills</h2>
              
              <div className="mt-4 grid gap-4 md:grid-cols-3 text-sm">
                <div>
                  <h3 className="font-semibold text-sm">Frontend</h3>
                  <ul className="mt-1 space-y-1 opacity-80 list-disc list-inside">
                    <li>Next.js / React</li>
                    <li>TypeScript / JavaScript</li>
                    <li>Tailwind CSS</li>
                    <li>Component-driven UI</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-sm">Backend & Data</h3>
                  <ul className="mt-1 space-y-1 opacity-80 list-disc list-inside">
                    <li>Node.js · RESTful APIs</li>
                    <li>Python (scripts, data processing)</li>
                    <li>PostgreSQL · Prisma · Django</li>
                    <li>Data handling with Pandas</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-sm">DevOps & Tools</h3>
                  <ul className="mt-1 space-y-1 opacity-80 list-disc list-inside">
                    <li>AWS (S3, IoT, EC2 basics)</li>
                    <li>Vercel deployments</li>
                    <li>Docker & CLI tools</li>
                    <li>Git / GitHub basics</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Experience section */}
            <section className="rounded-2xl border p-5 border-border shadow-md">
              <h2 className="text-lg font-semibold">Experience</h2>
              <div className="mt-4 space-y-6 text-sm">
                <article>
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-semibold">
                      Backend Developer · Anheng Information Technology
                    </h3>
                    <span className="text-sm opacity-70">2022 — 2023</span>
                  </div>
                  <p className="mt-2 opacity-90">
                    Django REST API + Kafka data pipeline for real-time cybersecurity event ingestion.
                  </p>
                  <ul className="mt-2 list-disc pl-5 space-y-1">
                    <li>Designed and implemented RESTful APIs using Django REST Framework and drf-spectacular.</li>
                    <li>Built Kafka consumers to stream security events into PostgreSQL for downstream analysis.</li>
                  </ul>
                </article>

                <article>
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-semibold">
                      Capstone · UWA Business School “Office Contact”
                    </h3>
                    <span className="text-sm opacity-70">2025</span>
                  </div>
                  <p className="mt-2 opacity-90">
                    Next.js + Prisma + PostgreSQL + Vercel app syncing Excel-based contact lists & floor plans.
                  </p>
                  <ul className="mt-2 list-disc pl-5 space-y-1">
                    <li>
                      Built a Handsontable-based front-end with mergeable cells and office map overlays 
                      for locating staff on floor plans.
                    </li>
                    <li>
                      Implemented authentication, notifications, and Excel↔JSON pipelines to integrate 
                      existing spreadsheets with a modern web UI.
                    </li>
                  </ul>
                </article>
              </div>
            </section>

            {/* Education section */}
            <section className="rounded-2xl border p-5 border-border shadow-md">
              <h2 className="text-lg font-semibold">Education</h2>
              <ul className="mt-4 space-y-6 text-sm">

                {/* Master's Degree */}
                <li>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-semibold text-sm">Master of Information Technology — UWA</span>
                    <span className="opacity-70">Jul 2023 — Jun 2025</span>
                  </div>
                  <div className="opacity-80">
                    GPA 6.38 / 7.0 · WAM 77.6 / 100
                  </div>
                  <ul className="list-disc ml-4 mt-1 opacity-80 space-y-1">
                    <li>Core units: Python (90), OOP (86), Capstone (86)</li>
                    <li>Awarded Global Excellence Scholarship (2023)</li>
                  </ul>
                </li>

                {/* Bachelor's Degree */}
                <li>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-semibold text-sm">Bachelor of Information Security — HDU</span>
                    <span className="opacity-70">Sep 2019 — Jun 2023</span>
                  </div>
                  <div className="opacity-80">
                    GPA 3.69 / 4.0 · AVG 81.9 / 100
                  </div>
                  <ul className="list-disc ml-4 mt-1 opacity-80 space-y-1">
                    <li>Core units: Computer Network (89), Security Testing & Evaluation (92)</li>
                  </ul>
                </li>

              </ul>
            </section>

            {/* Projects section */}
            <section className="rounded-2xl border p-5 border-border shadow-md">
              <h2 className="text-lg font-semibold">Projects</h2>

              <div className="mt-4 space-y-6 text-sm">

                {/* NFT Marketplace */}
                <article>
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-semibold">NFT Marketplace</h3>
                    <span className="opacity-70">2024</span>
                  </div>
                  <p className="opacity-80">
                    Python · Flask · Bootstrap · JavaScript · SQLite
                    {" "}
                    <a
                      href="https://github.com/ryan8614/Web-Development-Project"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      [GitHub]
                    </a>
                  </p>
                  <ul className="mt-2 list-disc pl-5 space-y-1 opacity-90">
                    <li>Designed and implemented a Flask backend handling authentication, database interactions, and NFT transaction APIs.</li>
                    <li>Built a responsive front-end using HTML, CSS, Bootstrap, and JavaScript for a seamless user experience.</li>
                    <li>Implemented secure authentication with hashed passwords and session-based logins.</li>
                    <li>Applied unittest and Selenium for unit testing, automated UI testing, and end-to-end API/database validation.</li>
                  </ul>
                </article>

                {/* Smart Doorbell System */}
                <article>
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-semibold">Smart Doorbell System</h3>
                    <span className="opacity-70">2025</span>
                  </div>
                  <p className="opacity-80">
                    Raspberry Pi · AWS IoT · Flask · Cloudinary
                    {" "}
                    <a
                      href="https://github.com/Hayeensss/Smart_Doorbell"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      [GitHub]
                    </a>
                  </p>
                  <ul className="mt-2 list-disc pl-5 space-y-1 opacity-90">
                    <li>Designed and implemented an IoT smart doorbell integrating PIR sensors, mmWave radar, camera, and microphone.</li>
                    <li>Built event-driven workflows for doorbell presses, automated lighting, and real-time notifications.</li>
                    <li>Enabled remote live streaming and event logging through Cloudflare Tunnel.</li>
                  </ul>
                </article>

              </div>
            </section>

        {/* Contact section */}
          </section>
        </div>
      </main>
    </div>
  );
}