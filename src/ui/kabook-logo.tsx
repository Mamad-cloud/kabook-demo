import { GlobeAltIcon } from '@heroicons/react/24/outline';
import {kurdish_sans} from '@/ui/fonts'

export default function KabookLogo() {
  return (
    <div 
      dir='rtl'
      className={`${kurdish_sans.className} flex-row items-center justify-center p-4 leading-none mb-4 text-white hidden md:flex`}
    >
      <p className="text-[33px]">کابووک</p>
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      
    </div>
  );
}
