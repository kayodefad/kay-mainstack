import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import React from 'react';
import LeftNav from '@/components/LeftNav';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <LeftNav />
        <div className="px-[12.5%]">{children}</div>
      </body>
    </html>
  );
}
