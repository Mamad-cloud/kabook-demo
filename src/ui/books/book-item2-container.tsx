import { BookDetails } from "@/lib/definitions";
import BookItem2 from "./book-item2";

export default function BookItem2Container({ books }: { books: BookDetails[] }) {
    return (
        <div className="flex flex-col w-full items-start gap-4 overflow-auto snap-x touch-pan-x no-scrollbar">
            {books.map(book => {
                return (
                    <BookItem2 categories={book.categories} genre={book.genre}
                        id={book.id} key={book.title} title={book.title} author={book.author} img={book.img}
                        slug={book.slug} desc={book.desc} datePublished={book.datePublished}
                        numberOfPages={book.numberOfPages}
                        price={book.price} publisherID={book.publisherID} color1={book.color1} color2={book.color2}/>
                )
            })}
        </div>
    )
}