import type React from "react";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "Hritam Shrivastava - Cyberpunk Portfolio",
  description:
    "Full Stack Developer - Building the future one line of code at a time",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
