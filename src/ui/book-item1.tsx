import Image from "next/image"
import Link from "next/link"
import { Book } from "@/lib/definitions"
// TODO: implement has_audio_book 
// TODO: complete the book placeholder 
export default function BookItem1({ title, author, img, slug }: Book) {

    return (
        <Link href={`/library/${slug}`}>
            <div className="relative flex flex-col items-center">
                <div className="flex flex-row mb-4">
                    <div className="h-48 w-1.5 bg-[#555555] rounded-r-sm"></div>
                    <div className="h-48 w-[1px] bg-[#000000]"></div>
                    <div className="h-48 w-[1px] bg-[#555555]"></div>
                    <div className="flex h-48 w-32 bg-[#404040] rounded-l-lg overflow-clip justify-center items-center">
                        <Image src={img} alt={title} width={150} height={200} />
                    </div>

                </div>
                <div className="items-start w-full pr-1">
                    <p className="font-medium text-lg">{title}</p>
                    <p className="font-thin text-sm">{author}</p>

                </div>
            </div>
        </Link>

    )
}