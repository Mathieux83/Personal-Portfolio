"use client";
import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";

export default function Providers({
  children,
}: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // On ne met pas ThemeProvider tant que ce n'est pas monté côté client
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={true}
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
