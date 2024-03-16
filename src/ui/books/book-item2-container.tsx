import { BookDetails } from "@/lib/definitions";
import BookItem2 from "./book-item2";

export default function BookItem2Container({ books }: { books: BookDetails[] }) {
    return (
        <div className="flex flex-col w-full items-start gap-4">
            {books.map(book => {
                return (
                    <BookItem2 key={book.id} {...book} />
                )
            })}
        </div>
    )
}