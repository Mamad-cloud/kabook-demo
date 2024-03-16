import { fetchBookAudioURL, fetchBookDetails } from "@/lib/actions"
import { formatScore } from "@/lib/utils"
import BookPlaceholder from "@/ui/books/book-placeholder"
import { LanguageIcon, MicrophoneIcon, StarIcon } from "@heroicons/react/24/solid"
import Image from "next/image"


export default async function Page( { params } : {params: { slug: string}} ) {
    
    const bookDetails = await fetchBookDetails(params.slug)
    const audioUrl = await fetchBookAudioURL(params.slug)
    
    return (
        <main dir="rtl" className="flex flex-col justify-between p-6">
            <div className="relative rounded-xl flex flex-col items-center h-[80vh] bg-[#222222] bg-opacity-85 p-6">
                <div className='absolute top-7'>
                    <Image src={'/vinil_record.svg'} alt="vinyll" width={270} height={270} />
                </div>

                <div className="w-[200px] h-[290px] z-10 mt-28">
                    <BookPlaceholder imgSrc={bookDetails.img} alt={bookDetails.title} color1={bookDetails.color1} color2={bookDetails.color2} />
                </div>

                <div className="flex flex-row w-full justify-center items-center gap-7 mt-5 mb-8">
                    <div className="flex flex-row gap-2 justify-center items-center">
                        <h5>تایم</h5>
                        <MicrophoneIcon width={30} height={30}/>
                    </div>
                    <div className="flex flex-row gap-2 justify-center items-center">
                        <h5>کوردی</h5>
                        <LanguageIcon width={30} height={30}/>
                    </div>
                    <div className="flex flex-row gap-2 justify-center items-center">
                        <h5>{formatScore(bookDetails.score)}</h5>
                        <StarIcon fill="#FFC41F" width={30} height={30}/>
                    </div>
                </div>


                <audio src={audioUrl} controls ></audio>

            </div>
        </main>
    )
} 