

import Link from "next/link"
import { BookDetails } from "@/lib/definitions"
import BookPlaceholder from "@/ui/books/book-placeholder"
import { formatCurrency } from "@/lib/utils"

// TODO: implement has_audio_book 
// TODO: determine whether or not user has already bookmarked this 
// TODO: implement sale badge
// TODO: implement rating component

export default function BookItem2({ title, author, img, slug, price, color1, color2 }: BookDetails) {



    return (
        <Link href={`${slug}`}>
            <div className="relative flex flex-row">
            
                <div className="h-28 w-20">
                    <BookPlaceholder color1={color1} color2={color2} imgSrc={img} alt={title}/>
                </div>
                
                <div className="flex flex-col mr-7 pt-3">
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-xs font-thin opacity-70">{author}</p>
                    <p className="text-sm"><span className="font-semibold">{formatCurrency(price)}</span></p>
                    {/* here goes rating  */}
                </div>

                <div className="">
                    {/** book mark icon */}
                </div>
                
            </div>
        </Link>

    )
}