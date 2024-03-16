
import Link from "next/link"
import BookPlaceholder from "@/ui/books/book-placeholder"
import { BookOpenIcon } from "@heroicons/react/24/solid"
import { MicrophoneIcon } from "@heroicons/react/24/outline"

// TODO: implement has_audio_book 

export default function LibraryBookItem({ title, author, img, slug, color1, color2, ePubURL, audioURL }: {title: string, author: string, img:string, slug: string, color1: string, color2: string, ePubURL: string, audioURL?: string}) {

    return (
            <div className="relative flex flex-col items-center">
                {/* images should be approximately 16:10 */}
                <div className="flex flex-col mb-4 h-48 w-[136px]">
                    <BookPlaceholder color1={color1} color2={color2} imgSrc={img} alt={title} />
                </div>
                <div className="flex flex-col gap-1 w-full items-center mb-5">
                    <p className="font-medium text-md text-wrap">{title}</p>
                    <p className="font-thin text-xs text-nowrap opacity-80">{author}</p>

                </div>

                <div className="flex flex-row gap-4 w-full">
                    { ePubURL && 
                        <Link className="flex justify-center items-center rounded-lg w-full h-auto p-3 bg-[#242424]" href={`/reader/${slug}`}>
                            <BookOpenIcon width={30} height={30}/>
                        </Link>
                    }

                {audioURL &&
                    <Link className="flex justify-center items-center rounded-lg w-full h-auto p-3 bg-[#242424]" href={`/narrator/${slug}`}>
                        <MicrophoneIcon width={30} height={30} />
                    </Link>
                }
            </div>
            </div>


    )
}