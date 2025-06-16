// app/layout.tsx
import './globals.css';
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: 'Mayowa Adams Portfolio',
  description: 'Frontend engineer portfolio built with Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}