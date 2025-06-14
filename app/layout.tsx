// app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'Mayowa Adams Portfolio',
  description: 'Frontend engineer portfolio built with Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}