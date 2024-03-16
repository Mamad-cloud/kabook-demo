import Image from "next/image"

export default function CategoryPlaceholder({color, imgSrc, alt} : {color: string, imgSrc?: string, alt?: string}) {
    return (
        <div className="flex flex-row h-full w-full">
            
        <div className="w-[3px] bg-[#6F543C] rounded-r-sm"></div>
        <div className="w-[0.5px] bg-[#FAFAFA] opacity-40"></div>
        <div className="flex grow bg-[#404040] rounded-l-lg overflow-clip justify-center items-center" style={ {backgroundColor : color}}>
            {imgSrc && alt ? <Image src={imgSrc} alt={alt} width={27} height={27} style={{ fill: 'white'}}/> : null }
            
        </div>

    </div>
    )
}