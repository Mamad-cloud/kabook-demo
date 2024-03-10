'use client'

import Link from 'next/link';
import NavLinks from '@/ui/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';
import KabookLogo from '@/ui/kabook-logo'

// TODO : Put the Tabbar in the root layout and set another layout for book pages 
// TODO: fix the position of the tab bar in large screens 
export default function TabBar() {
  return (
    <div dir='ltr' className="flex fixed bottom-0 z-10 flex-col w-full px-5 py-7 md:relative md:p-0 md:min-h-full md:bg-[#242424] md:max-w-[211px]">

        <Link href='/'>
          <KabookLogo />

        </Link>

       
        <div className="flex flex-row items-center justify-evenly h-[72px] bg-[#242424] rounded-2xl overflow-clip md:flex-col md:h-auto md:rounded-none md:w-[211px] ">

            <NavLinks />

        </div>


    </div>
  );
}
