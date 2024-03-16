export const dynamic = 'force-static'
//export const revalidate = 100

import Link from "next/link"

import { fetchBookDetails, addToCart } from "@/lib/actions"
import { formatCurrency, formatScore } from "@/lib/utils"
import BookDetailsHeader from "@/ui/book-details/bookdetails-header"

import BookPlaceholder from "@/ui/books/book-placeholder"

import { DocumentIcon, RectangleStackIcon } from '@heroicons/react/24/outline'
import StarRating from "@/ui/star-rating"


export default async function Page({ params }: { params: { slug: string } }) {
    const bookDetails = await fetchBookDetails(params.slug)

    return (
        <main className="flex flex-col  justify-center items-center p-5 pt-12">

            <div className="flex w-full h-auto items-center mb-8">
                <BookDetailsHeader />

            </div>

            <section className="flex flex-col justify-center items-center h-auto w-full mb-8">
                <div className="w-[230px] h-[350px]">
                    <BookPlaceholder imgSrc={bookDetails.img} alt={bookDetails.title} color1={bookDetails.color1} color2={bookDetails.color2} />
                </div>
            </section>
            
            <section className="flex flex-col gap-2 justify-center items-center w-full mb-3">
                <h1 className="text-2xl">{bookDetails.title}</h1>
                <h2 className="text-lg opacity-60">{bookDetails.author}</h2>
            </section>

            <section className="flex flex-row gap-4 mb-7 justify-center items-center">
                <StarRating score={bookDetails.score} height={25} width={25}/>
                <h3 className="flex flex-row-reverse gap-1"><span>{formatScore(bookDetails.score)}</span>/<span className="opacity-70">{formatScore(5)}</span></h3>
            </section>

            <section className="flex w-full px-5 mb-8">
                <p className="opacity-80 text">{bookDetails.desc}</p>
            </section>

            <div className="fixed flex flex-col gap-4 bottom-0 w-full h-auto p-10">
                <div className="flex flex-row gap-2 justify-between w-full">
                    <Link href={`/${bookDetails.slug}/reviews`} className="flex cursor-pointer flex-row gap-2 justify-center items-center h-[40px] w-full bg-[#242424] rounded-md shadow-md">
                        <h3>نظرات</h3>
                        <DocumentIcon height={30} width={30} />
                    </Link>

                    <Link href={`/reader/${bookDetails.slug}`} className="flex cursor-pointer flex-row gap-2 justify-center items-center h-[40px] w-full bg-[#242424] rounded-md shadow-md">
                        <h3>پیش نمایش</h3>
                        <RectangleStackIcon height={30} width={30} />
                    </Link>
                </div>

                <form action={addToCart}>
                    <input className="hidden" defaultValue={params.slug} type="text" />
                    <button type="submit" value={params.slug} className="flex flex-row justify-center items-center cursor-pointer h-[60px] w-full bg-[#129938] rounded-2xl">
                        <h3>اضافه به سبد خرید | {formatCurrency(bookDetails.price)}</h3>
                    </button>

                </form>

            </div>
        </main>
    )
}