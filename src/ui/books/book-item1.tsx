
import Link from "next/link"
import { BookDetails } from "@/lib/definitions"
import BookPlaceholder from "./book-placeholder"

// TODO: implement has_audio_book 

export default function BookItem1({ title, author, img, slug, color1, color2 }: BookDetails) {

    return (
        <Link href={`${slug}`}>
            <div className="relative flex flex-col items-center">
                {/* images should be approximately 16:10 */}
                <div className="mb-4 h-48 w-[136px]">
                    <BookPlaceholder color1={color1} color2={color2} imgSrc={img} alt={title} />

                </div>
                <div className="items-start w-full pr-1">
                    <p className="font-medium text-lg">{title}</p>
                    <p className="font-thin text-sm">{author}</p>

                </div>
            </div>
        </Link>

    )
}