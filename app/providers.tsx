// app/providers.tsx
'use client';

import { ThemeProvider } from 'next-themes';
import type { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"        // Use class attribute to apply theme
      defaultTheme="system"    // Use system theme as default
      enableSystem             // Enable system preference detection
    >
      {children}
    </ThemeProvider>
  );
}