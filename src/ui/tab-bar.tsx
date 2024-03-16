'use client'

import Link from 'next/link';
import NavLinks from '@/ui/nav-links';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { PowerIcon } from '@heroicons/react/24/outline';
import KabookLogo from '@/ui/kabook-logo'
 
// TODO: show tab bar in the narrator pages

export default function TabBar() {
  const displayPaths = ['/', '/library', '/signup', '/login', '/bookmarks', '/narrator', '/reader', '/cart', '/search', '/settings']
  const pathName = usePathname()

  let hide = true 
  if ( displayPaths.includes(pathName) || pathName.includes('/narrator')) hide = false

 // console.log(hide)
  return (
    <div dir='ltr' className={
      clsx("flex md:flex fixed bottom-0 z-10 flex-col w-full px-5 py-7 md:relative",
        "md:p-0 md:min-h-full md:bg-[#242424] md:max-w-[211px]", 
          {
            'hidden' : hide === true
          }
        )}>

      <Link href='/'>
        <KabookLogo />
      </Link>

      <div className="flex flex-row items-center justify-evenly h-[72px] bg-[#242424] rounded-2xl overflow-clip md:flex-col md:h-auto md:rounded-none md:w-[211px] ">
        <NavLinks />
      </div>
    </div>
  );
}
