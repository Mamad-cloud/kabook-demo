import {  BookDetails } from "@/lib/definitions";
import BookItem1 from "@/ui/books/book-item1";

export default function BookItem1Container( { books } : {books: BookDetails[]} ) {
    return ( 
        <div className="flex flex-row w-full items-start gap-4 overflow-auto snap-x touch-pan-x no-scrollbar">
            { books.map( book => <BookItem1  key={book.title} {...book}/>)}
        </div>
    )
}