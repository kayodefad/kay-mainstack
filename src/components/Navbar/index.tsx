'use client';

import Logo from '@/components/SVGs/Logo';
import Link from 'next/link';
import HomeIcon from '@/components/SVGs/HomeIcon';
import { usePathname } from 'next/navigation';
import NotifIcon from '@/components/SVGs/NotifIcon';
import MessageIcon from '@/components/SVGs/MessageIcon';
import MenuIcon from '@/components/SVGs/MenuIcon';
import { v4 as uuid } from 'uuid';
import React from 'react';
import AnalyticsIcon from '../SVGs/AnalyticsIcon';
import RevenueIcon from '../SVGs/RevenueIcon';
import CRMIcon from '../SVGs/CRMIcon';
import AppsIcon from '../SVGs/AppsIcon';

type Navlink = {
  name: string;
  link: string;
  icon: React.JSX.Element;
  activeIcon: React.JSX.Element;
};

const navLinks: Navlink[] = [
  {
    name: 'Home',
    link: '/',
    icon: <HomeIcon />,
    activeIcon: <HomeIcon fill="white" />,
  },
  {
    name: 'Analytics',
    link: 'analytics',
    icon: <AnalyticsIcon />,
    activeIcon: <AnalyticsIcon fill="white" />,
  },
  {
    name: 'Revenue',
    link: 'revenue',
    icon: <RevenueIcon />,
    activeIcon: <RevenueIcon fill="white" />,
  },
  {
    name: 'CRM',
    link: 'crm',
    icon: <CRMIcon />,
    activeIcon: <CRMIcon fill="white" />,
  },
  {
    name: 'Apps',
    link: 'apps',
    icon: <AppsIcon />,
    activeIcon: <AppsIcon fill="white" />,
  },
];

function Navbar() {
  const pathname = usePathname();

  const getActiveRoute = (link: Navlink) => (pathname.includes(`/${link.link}`) && link.link !== '/') || (pathname === '/' && link.link === '/');

  return (
    <nav className="mx-5 mb-12 mt-3 flex items-center justify-between rounded-[100px] border-2 border-white bg-white py-4 pl-7 pr-8 shadow-nav">
      <Link href="/">
        <Logo />
      </Link>
      <ul className="flex items-center gap-6">
        {navLinks.map((link) => (
          <li key={uuid()}>
            <Link href={link.link} className={`flex items-center gap-1 rounded-full px-[18px] py-2 ${getActiveRoute(link) ? 'bg-[#131316] text-white' : 'text-[#56616B] hover:bg-[#EEF1F6]'}`}>
              {getActiveRoute(link) ? <span>{link.activeIcon}</span> : <span>{link.icon}</span>}
              <span className="font-semibold">{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-7">
        <NotifIcon />
        <MessageIcon />
        <div className="flex cursor-pointer items-center gap-2 rounded-full bg-[#EFF1F6] py-1 pl-[5px] pr-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#131316] text-white">OJ</div>
          <MenuIcon />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
