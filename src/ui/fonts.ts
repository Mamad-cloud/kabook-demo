import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'

export const kurdish_sans = localFont({src: '../../public/kurdish_sans.ttf'})
export const poppins = Poppins({weight: ["400", "700"], subsets: ['latin']})