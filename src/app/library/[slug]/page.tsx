export const dynamic = 'force-static'
//export const revalidate = 100

import { fetchBookDetails } from "@/lib/actions"
import BookItem1 from "@/ui/book-item1"
import { ArrowLeftIcon } from "@heroicons/react/24/outline"


export default async function Page( {params} : {params: { slug: string}}) {
    const bookDetails = await fetchBookDetails(params.slug)

    return (
        <div className="flex flex-col justify-center items-center p-5 pt-10">
            <BookItem1 title={bookDetails.title} author={bookDetails.author} slug={bookDetails.slug} id={bookDetails.id} img={bookDetails.img}/>
            <h1>{bookDetails.title}</h1>
            <h2>{bookDetails.author}</h2>
            <h3>{bookDetails.datePublished}</h3>
            <p>{bookDetails.desc}</p>
            <button>Buy for {bookDetails.price} IRR</button>
            <p>{params.slug}</p>
        </div>
    )
}