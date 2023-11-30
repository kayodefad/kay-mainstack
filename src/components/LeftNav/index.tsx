'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import LinkInBioIcon from '../SVGs/LinkInBioIcon';
import LinkInBioActiveIcon from '../SVGs/LinkInBioActiveIcon';
import StoreIcon from '../SVGs/StoreIcon';
import StoreActiveIcon from '../SVGs/StoreActiveIcon';
import InvoicingIcon from '../SVGs/InvoicingIcon';
import InvoicingActiveIcon from '../SVGs/InvoicingActiveIcon';
import MediaKitIcon from '../SVGs/MediaKitIcon';
import MediaKitActiveIcon from '../SVGs/MediaKitActiveIcon';

type LeftNavlink = {
  id: number;
  icon: React.JSX.Element;
  activeIcon: React.JSX.Element;
};

const links: LeftNavlink[] = [
  {
    id: 1,
    icon: <LinkInBioIcon />,
    activeIcon: <LinkInBioActiveIcon />,
  },
  {
    id: 2,
    icon: <StoreIcon />,
    activeIcon: <StoreActiveIcon />,
  },
  {
    id: 3,
    icon: <MediaKitIcon />,
    activeIcon: <MediaKitActiveIcon />,
  },
  {
    id: 4,
    icon: <InvoicingIcon />,
    activeIcon: <InvoicingActiveIcon />,
  },
];

function LeftNav() {
  const [activeId, setActiveId] = useState(0);

  const setActiveElementOnHover = (id: number) => {
    setActiveId(id);
  };

  const resetActiveElementOnLeave = () => {
    setActiveId(0);
  };

  return (
    <div className="shadow-leftNav fixed left-5 top-1/2 flex -translate-y-1/2 flex-col justify-center gap-2 rounded-full bg-white bg-opacity-25 p-1">
      {links.map((link) => (
        <Link onMouseEnter={() => setActiveElementOnHover(link.id)} onMouseLeave={resetActiveElementOnLeave} key={uuid()} className="group rounded-full p-2 hover:bg-[#EEF1F6]" href="/">
          {activeId === link.id ? <span>{link.activeIcon}</span> : <span>{link.icon}</span>}
        </Link>
      ))}
    </div>
  );
}

export default LeftNav;
