// app/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {

    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const links = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/resume', label: 'Resume' },
        { href: '/projects', label: 'Projects' }
    ];

    useEffect(() => {
        setMounted(true);
        // Apply saved theme on mount; fallback to system preference
        const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const saved = localStorage.getItem("theme");             // 'dark' | 'light' | null
        const isDarkInit = saved ? saved === "dark" : systemDark;
        setDarkMode(isDarkInit);
        document.documentElement.classList.toggle("dark", isDarkInit);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        setOpen(false); // close mobile menu on route change
    }, [pathname, mounted]);

    const toggleTheme = () => {
        const next = !darkMode;
        setDarkMode(next);
        document.documentElement.classList.toggle("dark", next);
        localStorage.setItem("theme", next ? "dark" : "light");
    };

    return (
        <nav className="sticky inset-x-0 top-0 z-50 border-b border-border bg-background text-foreground">
            <div className="mx-auto flex h-18 w-full max-w-6xl items-center justify-between px-20">
                {/* Logo */}
                <Link href="/" className="font-semibold">
                    MySite<span className="text-blue-500">.</span>
                </Link>

                {/* Desktop links */}
                <div className="hidden items-center gap-6 md:flex mx-2">
                    {links.map((l) => {
                        const active = pathname === l.href;
                        return (
                        <Link
                            key={l.href}
                            href={l.href}
                            data-active={active ? 'true' : 'false'}
                            className="text-sm font-medium transition-color data-[active=true]:text-blue-600"
                        >
                            {l.label}
                        </Link>
                        );
                    })}

                    {/* Theme toggle */}
                    <button
                        type="button"
                        className="text-lg font-medium transition-color hover:text-blue-600"
                        onClick={toggleTheme}
                    >
                        {darkMode ?  '☀️' : '🌙'}

                    </button>
                </div>

                {/* Mobile hamburger */}
                <button
                    type="button"
                    className="md:hidden rounded-md p-2 hover:bg-zinc-100"
                    onClick={() => setOpen((v) => !v)}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    aria-label="Toggle menu"
                    >
                    {open ? '✖️' : '☰'}
                </button>
            </div>

            {/* Mobile menu */}
            <div id="mobile-menu" className={`md:hidden border-t border-border ${open ? 'block' : 'hidden'}`}>
                <div className="mx-auto max-w-6xl w-full px-20">
                    <ul className="py-1">
                        {links.map((l) => {
                            const active = pathname === l.href;
                            return (
                                <li key={l.href}>
                                    <Link
                                        href={l.href}
                                        data-active={active ? 'true' : 'false'}
                                        className="block rounded-md py-2 text-base text-inherit transition-colors hover:text-blue-600"
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            );
                        })}
                        {/* Mobile theme toggle */}
                        <li>
                            <button
                            type="button"
                            className="block rounded-md py-2 text-base text-inherit transition-colors hover:text-blue-600"
                            onClick={toggleTheme}
                            >
                            {darkMode ? '☀️ ' : '🌙 '}
                            </button>
                        </li>
                    </ul>
                
                </div>
            </div>
        </nav>
    );  
}
