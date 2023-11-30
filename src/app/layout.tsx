import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import React from 'react';
import LeftNav from '@/components/LeftNav';
import Providers from '@/components/Providers';

export const metadata: Metadata = {
  title: 'Kayode Mainstack FE Assessment',
  description: 'Mainstack Frontend Assessment',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Providers>
        <body>
          <Navbar />
          <LeftNav />
          <div className="px-[12.5%]">{children}</div>
        </body>
      </Providers>
    </html>
  );
}
