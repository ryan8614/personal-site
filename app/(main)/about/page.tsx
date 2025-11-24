'use client';

import Slidebar from "@/app/components/Slidebar";

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="max-w-6xl mx-auto px-8 py-10 bg-background">
        <div className="flex flex-col md:flex-row gap-8">

          {/* Sidebar */}
          <Slidebar />

          {/* Main content */}
          <section className="flex-1 min-w-0 space-y-10">

            {/* Title */}
            <header className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tight">About Me</h1>
              <p className="text-sm md:text-base opacity-80 max-w-2xl leading-relaxed">
                I’m Ryan, a web developer and tech enthusiast who enjoys building clean, 
                practical products — and balancing screen time with the gym, the ocean, and real life.
              </p>
            </header>

            {/* Story / Journey */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold">My Journey</h2>
              <div className="grid gap-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
                <div className="space-y-3 text-sm md:text-base leading-relaxed">
                  <p>
                    I grew up in China, and during high school I spent a lot of time playing games 
                    like PUBG and CSGO. Spending so many hours with a computer naturally made me 
                    curious about how things worked behind the screen.
                  </p>
                  <p>
                    That curiosity led me to study{" "}
                    <span className="font-medium">Information Security</span> at Hangzhou Dianzi 
                    University, where I built a strong foundation in networks, security principles, 
                    and programming. Over time, I realised I enjoyed not just understanding systems, 
                    but also designing and building them from the ground up.
                  </p>
                  <p>
                    Now I’m in Perth, completing my{" "}
                    <span className="font-medium">Master of Information Technology at UWA</span>, 
                    focusing on web development and backend engineering. I’m working on projects that 
                    combine practical problem-solving with clean, maintainable code.
                  </p>
                </div>

                {/* Simple timeline */}
                <div className="border-l border-border pl-4 space-y-4 text-sm">
                  <div>
                    <div className="text-xs uppercase tracking-wide opacity-60">
                      High School
                    </div>
                    <div className="font-medium">First contact with programming</div>
                    <p className="opacity-80">
                      Started exploring computers, games, and basic coding. Realised tech could be more than just a hobby.
                    </p>
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-wide opacity-60">
                      Bachelor – Information Security
                    </div>
                    <div className="font-medium">Hangzhou Dianzi University</div>
                    <p className="opacity-80">
                      Studied networks, security, and software fundamentals. Built a strong foundation in computer science.
                    </p>
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-wide opacity-60">
                      Master – Information Technology
                    </div>
                    <div className="font-medium">The University of Western Australia</div>
                    <p className="opacity-80">
                      Moved to Perth, shifted focus towards web development, backend services, and real-world projects.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Hobbies / Life */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold">Life Outside the Screen</h2>
              <p className="text-sm md:text-base opacity-80 max-w-2xl">
                I like keeping my life balanced: writing code during the day, and recharging through 
                movement, water, and new places whenever I can.
              </p>

              <div className="grid gap-4 md:grid-cols-3 text-sm">
                <div className="rounded-2xl border border-border p-4 space-y-2">
                  <h3 className="font-semibold">Fitness</h3>
                  <p className="opacity-80">
                    Regular strength training and gym sessions help me keep a clear mind and stay disciplined. 
                    I like seeing progress — both in code and in the weights I can lift.
                  </p>
                </div>

                <div className="rounded-2xl border border-border p-4 space-y-2">
                  <h3 className="font-semibold">Diving & the Ocean</h3>
                  <p className="opacity-80">
                    I enjoy being in the water — from swimming to scuba diving. 
                    The underwater world is a good reminder that there’s a bigger world beyond the screen.
                  </p>
                </div>

                <div className="rounded-2xl border border-border p-4 space-y-2">
                  <h3 className="font-semibold">Games & Tech</h3>
                  <p className="opacity-80">
                    I like playing games and exploring new tools, frameworks, and side projects. 
                    Many of my coding ideas start from solving small problems in daily life.
                  </p>
                </div>
              </div>
            </section>

            {/* Travel & photos */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold">Places I’ve Been</h2>
              <p className="text-sm md:text-base opacity-80 max-w-2xl">
                Moving to Perth opened a new chapter in my life. I enjoy exploring new cities, 
                coastlines, and cafés — and taking photos along the way.
              </p>

              <ul className="text-sm list-disc list-inside opacity-90 space-y-1">
                <li>Perth, WA — my current base, with some of the best sunsets I’ve seen.</li>
                <li>Hangzhou & other cities in China — where my journey with tech and study started.</li>
                <li>Other places I’ve visited for study, travel, or to meet friends.</li>
              </ul>

              {/* Photo grid – replace src with your real photos */}
              <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
                <img
                  src="/images/sunset.jpg"
                  alt="Perth sunset by the river"
                  className="aspect-[4/3] w-full rounded-2xl object-cover border border-border"
                />
                <img
                  src="/images/gym.jpg"
                  alt="Gym or training moment"
                  className="aspect-[4/3] w-full rounded-2xl object-cover border border-border"
                />
                <img
                  src="/images/diving.jpg"
                  alt="Diving or ocean scene"
                  className="aspect-[4/3] w-full rounded-2xl object-cover border border-border"
                />
                <img
                  src="/images/city.jpg"
                  alt="City or street view"
                  className="aspect-[4/3] w-full rounded-2xl object-cover border border-border"
                />
                <img
                  src="/images/trip.jpg"
                  alt="My trip to Bali"
                  className="aspect-[4/3] w-full rounded-2xl object-cover border border-border"
                />
                <img
                  src="/images/friends.jpg"
                  alt="Moments with friends"
                  className="aspect-[4/3] w-full rounded-2xl object-cover border border-border"
                />
              </div>
            </section>

            {/* Closing */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold">Right Now</h2>
              <p className="text-sm md:text-base opacity-80 max-w-2xl">
                I’m currently focused on improving my skills as a backend and full-stack developer, 
                working on personal projects, and preparing for the next step in my career in Australia.
              </p>
              <p className="text-sm md:text-base opacity-80 max-w-2xl">
                If you’d like to chat about web development, backend systems, or just good coffee spots in Perth, 
                feel free to reach out through email or LinkedIn.
              </p>
            </section>
          </section>
        </div>
      </main>
    </div>
  );
}