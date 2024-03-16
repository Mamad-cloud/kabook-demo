'use client'

import Image from "next/image"

/**
 * Both props are neccessary to display image otherwise null is returned 
 * @param imgSrc
 * @param alt
 * @returns 
 */
export default function BookPlaceholder({ imgSrc, alt, color1, color2 }: { imgSrc?: string, alt?: string, color1?: string, color2?: string }) {
    return (
        <div className="flex flex-row h-full w-full">
            
            <div className="w-2 bg-[#555555] rounded-r-sm"  style={{ backgroundColor: color2}}></div>
            <div className="w-[2px] bg-[#000000]" ></div>
            <div className="w-[2px] bg-[#555555]"></div>
            <div className="flex grow bg-[#404040] rounded-l-lg overflow-clip justify-center items-center "  style={{ backgroundColor: color1}}>
                {imgSrc && alt ? <Image src={imgSrc} alt={alt} width={250} height={350} /> : null}
                
            </div>

        </div>
    )
}   