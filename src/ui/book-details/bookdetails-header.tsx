'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"
import { BookmarkIcon, ChevronLeftIcon } from "@heroicons/react/24/outline"
import { BookmarkIcon as SolidBookmark } from "@heroicons/react/24/solid"

export default function BookDetailsHeader() {
    const { back } = useRouter()
    const [bookmarked, setBookmarked] = useState(false)
    return (
        <section className="flex flex-row w-full h-auto justify-between">
            <div className="flex flex-row gap-3">
                <div className="cursor-pointer w-[30px] h-[30px]">
                    <div className="flex flex-col gap-2">
                        <span className="text-2xl" style={{ lineHeight: '0px' }}>.</span>
                        <span className="text-2xl" style={{ lineHeight: '0px' }}>.</span>
                        <span className="text-2xl" style={{ lineHeight: '0px' }}>.</span>
                    </div>
                </div>

                <div className="cursor-pointer flex flex-row" onClick={() => {
                    setBookmarked(!bookmarked)
                }}>
                    {bookmarked ? <SolidBookmark width={30} height={30} /> : <BookmarkIcon width={30} height={30} />}

                </div>
            </div>
            <div className="cursor-pointer" onClick={() => back()}>
                <ChevronLeftIcon width={30} height={30} />
            </div>
        </section>
    )
}