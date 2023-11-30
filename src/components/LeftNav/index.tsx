'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import LinkInBioIcon from '@/components/SVGs/LinkInBioIcon';
import LinkInBioActiveIcon from '@/components/SVGs/LinkInBioActiveIcon';
import StoreIcon from '@/components/SVGs/StoreIcon';
import StoreActiveIcon from '@/components/SVGs/StoreActiveIcon';
import InvoicingIcon from '@/components/SVGs/InvoicingIcon';
import InvoicingActiveIcon from '@/components/SVGs/InvoicingActiveIcon';
import MediaKitIcon from '@/components/SVGs/MediaKitIcon';
import MediaKitActiveIcon from '@/components/SVGs/MediaKitActiveIcon';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

type LeftNavlink = {
  id: number;
  icon: React.JSX.Element;
  activeIcon: React.JSX.Element;
  tooltipText: string;
};

const links: LeftNavlink[] = [
  {
    id: 1,
    icon: <LinkInBioIcon />,
    activeIcon: <LinkInBioActiveIcon />,
    tooltipText: 'Link in Bio',
  },
  {
    id: 2,
    icon: <StoreIcon />,
    activeIcon: <StoreActiveIcon />,
    tooltipText: 'Store',
  },
  {
    id: 3,
    icon: <MediaKitIcon />,
    activeIcon: <MediaKitActiveIcon />,
    tooltipText: 'Media Kit',
  },
  {
    id: 4,
    icon: <InvoicingIcon />,
    activeIcon: <InvoicingActiveIcon />,
    tooltipText: 'Invoicing',
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
    <div className="fixed left-[3%] top-1/2 flex -translate-y-1/2 flex-col justify-center gap-2 rounded-full bg-white bg-opacity-25 p-1 shadow-leftNav">
      {links.map((link) => (
        <TooltipProvider key={uuid()} delayDuration={100}>
          <Tooltip>
            <TooltipTrigger onMouseEnter={() => setActiveElementOnHover(link.id)} onMouseLeave={resetActiveElementOnLeave} className="group rounded-full p-2 hover:bg-[#EEF1F6]">
              <Link href="/">{activeId === link.id ? <span>{link.activeIcon}</span> : <span>{link.icon}</span>}</Link>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={10} className="rounded-lg border-none bg-black px-3 py-[10px]">
              <p className="text-lg text-white">{link.tooltipText}</p>
              <TooltipPrimitive.Arrow width={12} height={6} className="fill-black" />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
}

export default LeftNav;
