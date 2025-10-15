import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GreenTally - Your Ultimate Golf Companion',
  description: 'Track your game, improve your skills, and discover new courses with GreenTally, the ultimate golf companion app.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
);
}
