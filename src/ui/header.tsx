'use client'

import Image from "next/image";
import Profile from 'vercel.svg' 

export default function Header() {
    return (
        <div className="flex flex-row w-full ">
            <div className="items-center justify-center">
                <div className="h-[50px] w-[50px] rounded-full overflow-clip">
                    <Image src={Profile} alt="hi"/>
                </div>
            </div>
        </div>
    )
}