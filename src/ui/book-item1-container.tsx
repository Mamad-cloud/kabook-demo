import { Book } from "@/lib/definitions";
import BookItem1 from "./book-item1";

export default function BookItem1Container( { books } : {books: Book[]} ) {
    return ( 
        <div className="flex flex-row w-full items-start gap-4 overflow-auto snap-x touch-pan-x no-scrollbar">
            { books.map( book => <BookItem1 key={book.title} title={book.title} author={book.author} img={book.img} slug={book.slug}/>)}
        </div>
    )
}