'use client'

import Navbar from "./components/Navbar";
import SiteStatus from "./components/SiteStatus";

export default function Home() {

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
            <div className="space-y-8">
              
              {/* Profile photo */}
              <img
                src="/images/photo.jpg" /* Replace this with your image path */
                alt="Profile photo"
                className="aspect-square w-full rounded-2xl object-cover border border-gray-300 shadow-md"
              />
          
              <div className="flex flex-col space-y-2">
                <h2 className="text-2xl font-bold">Ryan Chang</h2>
                <p className="text-sm opacity-80">Web Developer</p>
              </div>

              <hr className="border-t border-gray-300"/>

              {/* Contact info card */}
              <section className="rounded-2xl">
                <h2 className="text-sm font-semibold opacity-80">Contact</h2>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>Email: <a href="mailto:yike8614@gmail.com" className="underline underline-offset-4">yike8614@gmail.com</a></li>
                  <li>Location: Perth, WA</li>
                  <li>GitHub: <a href="https://github.com/ryan8614" className="underline underline-offset-4">ryan8614</a></li>
                  <li>LinkedIn: <a href="https://www.linkedin.com/in/ryan-chang8614" className="underline underline-offset-4">/in/ryan-chang8614</a></li>
                </ul> 
              </section>

            </div>
          </aside>

          {/* Main content: full-width on small screens, 3/4 width on md and above */}
          <section className="flex-1 min-w-0 space-y-8 border border-gray-300 shadow-md rounded-2xl p-8 md:basis-3/4 md:grow">

            <h1 className="text-4xl font-bold">Welcome to my website!</h1>

            <p className="text-lg">
              This is a simple personal website built with Next.js and Tailwind CSS.
              It is deployed on Vercel. The source code is available on{" "}
              <a
                href="https://github.com/ryan8614/personal-site" 
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              .
            </p>

            <p className="text-lg">
              This website serves as a personal portfolio where I introduce myself, 
              share my resume, and highlight some of the projects I’ve worked on.  
              Whether you’re a recruiter, collaborator, or just curious, 
              feel free to explore the sections to learn more about my journey as a developer.
            </p>

            <h2 className="text-xl font-semibold mt-6">
              Some status about this site
            </h2>

            <SiteStatus />
            
          </section>
        </div>
      </main>

    </div>
  );
}