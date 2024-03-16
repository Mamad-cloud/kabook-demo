'use client'

import {
  BookmarkIcon,
  PlayIcon,
  ArchiveBoxIcon,
  HomeIcon,
  CogIcon
} from '@heroicons/react/24/outline'

import clsx from 'clsx'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'خانه', href: '/', icon: HomeIcon },
  { name: 'علاقه مندی ها', href: '/bookmarks', icon: BookmarkIcon },
  {
    name: 'کتابخانه من',
    href: '/library',
    icon: ArchiveBoxIcon,
  },
  { name: 'کتابخوان صوتی', href: '/narrator', icon: PlayIcon },
  { name: 'تنظیمات', href: '/settings', icon: CogIcon },

];

export default function NavLinks() {
  const pathName = usePathname()
  //console.log(pathName)
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx("flex h-full grow items-center justify-center gap-2 p-4 text-md font-medium hover:bg-[#343434] md:h-12 md:w-full md:justify-between",
              {
                'bg-[#343434]': pathName === link.href
              }
            )}
          >
            <LinkIcon className={clsx("w-6 opacity-100", { "opacity-40" : pathName !== link.href })} />
            <p className={clsx("opacity-100 hidden md:block", { 'opacity-40' : pathName !== link.href })}>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
