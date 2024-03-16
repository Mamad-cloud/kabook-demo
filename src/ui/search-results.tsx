import { searchBooks } from "@/lib/actions";
import BookItem1 from "./books/book-item1";


export default async function SearchResults({query, category}: {query?: string, category?: string}) {
    
    const books = await searchBooks(category, query)

    const booksContainer = (
        <div className="flex flex-row flex-wrap w-full items-start gap-4 overflow-auto snap-x touch-pan-x no-scrollbar">
            { books.map( book => <BookItem1  key={book.title} {...book}/>)}
        </div>
    )

    return (
        <div>
            {books.length > 0 ? booksContainer : `no results were found for ${query}`}
            
        </div>
    )
} 