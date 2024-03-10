import { searchBooks } from "@/lib/actions";
import BookItem1Container from "./books/book-item1-container";


export default async function SearchResults({query, category}: {query?: string, category?: string}) {
    
    const books = await searchBooks(category, query)

    return (
        <div>
            {books.length > 0 ? <BookItem1Container books={books}/> : `no results were found for ${query}`}
            
        </div>
    )
} 