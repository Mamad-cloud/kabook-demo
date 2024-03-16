'use client'

import Link from "next/link"
import { BookDetails } from "@/lib/definitions"
import BookPlaceholder from "@/ui/books/book-placeholder"
import { formatCurrency } from "@/lib/utils"
import { BookmarkIcon } from "@heroicons/react/24/outline"
import { BookmarkIcon as SolidBookmark } from "@heroicons/react/24/solid"
import StarRating from "@/ui/star-rating"
import { useState } from "react"

// TODO: implement has_audio_book 
// TODO: determine whether or not user has already bookmarked this 
// TODO: implement sale badge
// TODO: implement rating component

export default function BookItem2({ title, author, img, slug, price, color1, color2, score }: BookDetails) {
    const [bookmarked, setBookmarked ] = useState(false)

    return (

        <div className="relative flex flex-row justify-between w-full">
            <Link href={`${slug}`} className="flex flex-row w-full">
                <div className="h-28 w-20">
                    <BookPlaceholder color1={color1} color2={color2} imgSrc={img} alt={title} />
                </div>

                <div className="flex flex-col mr-7 pt-1 gap-1">
                    <h3 className="text-lg ">{title}</h3>
                    <p className="text-xs font-thin opacity-70">{author}</p>
                    <p className="text-sm"><span className="font-semibold">{formatCurrency(price)}</span></p>
                    <div>
                        <StarRating score={score} width={17} height={17} readOnly/>
                    </div>
                    
                </div>
            </Link>

            <div className="flex flex-col cursor-pointer" 
                 onClick={() => {
                    setBookmarked(!bookmarked)
                 } }>

                {bookmarked ? <SolidBookmark width={30} height={30} /> :  <BookmarkIcon width={30} height={30} />}
            </div>

        </div>


    )
}