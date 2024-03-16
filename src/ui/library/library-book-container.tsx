import {  BookDetails } from "@/lib/definitions";
import LibraryBookItem from "@/ui/library/book-item";

export default function LibraryBookContainer( { books, bookUrls } : {books: BookDetails[], bookUrls: Map<number, {ePubURL: string, audioURL?: string}>} ) {
    return ( 
        <div className="flex flex-row w-full items-start gap-4 overflow-auto snap-x touch-pan-x no-scrollbar">
            { books.map( book => {
                const url = bookUrls.get(book.id)!
                return (
                    <LibraryBookItem  key={book.title} img={book.img} slug={book.slug} audioURL={url.audioURL} author={book.author} title={book.title} color1={book.color1} color2={book.color2} ePubURL={url.ePubURL}/>
                )
            })}
        </div>
    )
}