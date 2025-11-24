// app/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function Navbar() {

    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { theme, resolvedTheme, setTheme } = useTheme();

    const links = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/resume', label: 'Resume' },
        { href: '/projects', label: 'Projects' }
    ];

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        setOpen(false); // close mobile menu on route change
    }, [pathname, mounted]);

    const ThemeToggle = () => {
        if (!mounted) return null; // theme toggle not mounted yet

        const currentTheme = resolvedTheme ?? theme;
        const isDark = currentTheme === 'dark';

        return (
        <button
            type="button"
            className="text-lg font-medium transition-colors"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {isDark ? '☀️' : '🌙'}
        </button>
        );
    };


    return (
        <nav className="sticky inset-x-0 top-0 z-50 border-b border-border bg-background text-foreground">
            <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 md:px-20">
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
                        aria-current={active ? 'page' : undefined}
                        className="text-sm font-medium transition-colors data-[active=true]:text-blue-600 hover:text-blue-600"
                    >
                        {l.label}
                    </Link>
                    );
                })}

                {/* Theme toggle (desktop) */}
                <ThemeToggle />
                </div>

                {/* Mobile hamburger */}
                <button
                type="button"
                className="md:hidden rounded-md p-2"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label="Toggle navigation menu"
                >
                {open ? '✖️' : '☰'}
                </button>
            </div>

            {/* Mobile menu */}
            <div
                id="mobile-menu"
                className={`md:hidden border-t border-border ${open ? 'block' : 'hidden'}`}
            >
                <div className="mx-auto w-full max-w-6xl px-5 md:px-20">
                <ul className="py-1 space-y-1">
                    {links.map((l) => {
                    const active = pathname === l.href;
                    return (
                        <li key={l.href}>
                        <Link
                            href={l.href}
                            data-active={active ? 'true' : 'false'}
                            aria-current={active ? 'page' : undefined}
                            className="block rounded-md py-2 text-base text-inherit transition-colors hover:text-blue-600 data-[active=true]:text-blue-600"
                        >
                            {l.label}
                        </Link>
                        </li>
                    );
                    })}

                    {/* Mobile theme toggle */}
                    <li className="pt-1">
                    <ThemeToggle />
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    ); 
}
