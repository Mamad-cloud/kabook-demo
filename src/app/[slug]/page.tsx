export const dynamic = 'force-static'
//export const revalidate = 100

import { fetchBookDetails } from "@/lib/actions"
import { formatDateToLocal } from "@/lib/utils"

import BookPlaceholder from "@/ui/books/book-placeholder"

export default async function Page( {params} : {params: { slug: string}}) {
    const bookDetails = await fetchBookDetails(params.slug)

    return (
        <div className="flex flex-col justify-center items-center p-5 pt-10">
            <div className="w-[200px] h-[200px]">
                <BookPlaceholder imgSrc={bookDetails.img} alt={bookDetails.title} color1={bookDetails.color1} color2={bookDetails.color2}/>
            </div>
            <h1>{bookDetails.title}</h1>
            <h2>{bookDetails.author}</h2>
            <h3>{formatDateToLocal(bookDetails.datePublished)}</h3>
            <p>{bookDetails.desc}</p>
            <button>Buy for {bookDetails.price} IRR</button>
            <p>{params.slug}</p>
        </div>
    )
}