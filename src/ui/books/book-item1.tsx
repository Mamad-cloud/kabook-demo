
import Link from "next/link"
import { BookDetails } from "@/lib/definitions"
import BookPlaceholder from "@/ui/books/book-placeholder"

// TODO: implement has_audio_book 

export default function BookItem1({ title, author, img, slug, color1, color2 }: BookDetails) {

    return (
        <Link href={`${slug}`}>
            <div className="relative flex flex-col items-center">
                {/* images should be approximately 16:10 */}
                <div className="flex flex-col mb-4 h-48 w-[136px]">
                    <BookPlaceholder color1={color1} color2={color2} imgSrc={img} alt={title} />
                </div>
                <div className="flex flex-col gap-1 items-start w-full pr-1">
                    <p className="font-medium text-md text-wrap">{title}</p>
                    <p className="font-thin text-xs text-nowrap opacity-80">{author}</p>

                </div>
            </div>
        </Link>

    )
}