'use client'

import Image from 'next/image'

export default function Slidebar() {
    return (
        <aside className="hidden md:block md:basis-1/4 md:shrink-0">
            <div className="space-y-8 p-3">
                
                {/* Profile photo */}
                <div className="relative w-full aspect-square rounded-2xl border border-border shadow-md overflow-hidden">
                    <Image
                        src="/images/photo.jpg"
                        alt="Profile photo"
                        fill
                        quality={100}
                        className="object-cover"
                        sizes="(min-width: 768px) 25vw, 50vw"
                        priority
                        loading='eager'
                    />
                </div>
            
                <div className="flex flex-col space-y-2">
                <h2 className="text-2xl font-bold">Ryan Chang</h2>
                <p className="text-sm opacity-80">Web Developer</p>
                </div>

                <hr className="border-t border-border"/>

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

                <hr className="border-t border-border"/>

                {/* Skills pill list */}
                <section>
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
    )
}