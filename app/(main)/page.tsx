'use client'

import SiteStatus from "@/app/components/SiteStatus";
import Slidebar from "@/app/components/Slidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="max-w-6xl mx-auto px-8 py-10 bg-background">
        <div className="flex flex-col md:flex-row gap-8">

          {/* Sidebar */}
          <Slidebar />

          {/* Main content */}
          <section className="flex-1 min-w-0 space-y-10">
            
            {/* Hero */}
            <header className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tight">
                Welcome to my website!
              </h1>
              <p className="text-sm md:text-base opacity-80 max-w-2xl leading-relaxed">
                I’m Ryan, a web developer based in Perth, 
                Graduate Student at the  <span className="font-medium">University of Western Australia</span>, 
                and a <span className="font-medium">Master of Information Technology</span>. 
                I enjoy designing and building full-stack applications that are both technically solid and pleasant to use.
              </p>

              {/* Quick actions */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="/resume"
                  className="inline-flex items-center rounded-full border border-border px-4 py-1.5 text-sm hover:bg-surface-hover transition"
                >
                  View my resume
                </a>
                <a
                  href="/projects"  
                  className="inline-flex items-center rounded-full border border-border px-4 py-1.5 text-sm hover:bg-surface-hover transition"
                >
                  Browse projects
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center rounded-full border border-border px-4 py-1.5 text-sm hover:bg-surface-hover transition"
                >
                  Learn more about me
                </a>
              </div>
            </header>

            {/* Short intro about the site */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold">
                About this site
              </h2>
              <p className="text-sm md:text-base opacity-80 max-w-2xl leading-relaxed">
                This website is my personal portfolio. Here you can find my background, 
                technical skills, and a selection of projects I’ve worked on — from 
                university capstone work to personal experiments. It’s built with{" "}
                <span className="font-medium">Next.js</span> and{" "}
                <span className="font-medium">Tailwind CSS</span>, and deployed on{" "}
                <span className="font-medium">Vercel</span>.
              </p>
              <p className="text-sm md:text-base opacity-80 max-w-2xl leading-relaxed">
                The source code is available on{" "}
                <a
                  href="https://github.com/ryan8614/personal-site"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                , where I keep iterating on the layout, performance, and content as I grow as a developer.
              </p>
            </section>

            {/* Skills section */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold">
                What I work with
              </h2>
              <p className="text-sm md:text-base opacity-80 max-w-2xl leading-relaxed">
                I enjoy working across the stack — from frontend components to backend APIs 
                and cloud deployment. Here are some of the tools and technologies I use most often.
              </p>

              <div className="grid gap-4 md:grid-cols-3 text-sm">
                <div className="rounded-2xl border border-border p-4 space-y-2">
                  <h3 className="font-semibold text-sm">Frontend</h3>
                  <ul className="space-y-1 opacity-80">
                    <li>Next.js / React</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>Component-driven UI</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-border p-4 space-y-2">
                  <h3 className="font-semibold text-sm">Backend & Data</h3>
                  <ul className="space-y-1 opacity-80">
                    <li>Node.js / API design</li>
                    <li>Python (FastAPI, scripts)</li>
                    <li>PostgreSQL · Prisma</li>
                    <li>Data processing with Pandas</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-border p-4 space-y-2">
                  <h3 className="font-semibold text-sm">DevOps & Cloud</h3>
                  <ul className="space-y-1 opacity-80">
                    <li>Vercel deployments</li>
                    <li>AWS (S3, IoT, EC2 basics)</li>
                    <li>Docker</li>
                    <li>GitHub</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Site status */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold">
                Site status & activity
              </h2>
              <p className="text-sm md:text-base opacity-80 max-w-2xl leading-relaxed">
                A quick look at some live stats around this website and its usage.
              </p>
              <SiteStatus />
            </section>

            {/* Call to action */}
            <section className="space-y-3 border-t border-border pt-6">
              <h2 className="text-xl font-semibold">
                Let’s connect
              </h2>
              <p className="text-sm md:text-base opacity-80 max-w-2xl leading-relaxed">
                I’m always open to hearing about opportunities, interesting projects, or 
                just casual conversations about tech, study, or life in Perth. 
                You can reach me via email or connect with me on LinkedIn.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:yike8614@gmail.com"
                  className="inline-flex items-center rounded-full border border-border px-4 py-1.5 text-sm font-medium hover:bg-surface-hover transition"
                >
                  Email me
                </a>
                <a
                  href="https://www.linkedin.com/in/ryan-chang8614"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-border px-4 py-1.5 text-sm font-medium hover:bg-surface-hover transition"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </section>
          </section>
        </div>
      </main>
    </div>
  );
}