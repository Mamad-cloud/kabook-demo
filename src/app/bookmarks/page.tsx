
import { BookDetails } from "@/lib/definitions"
import { fetchUserBookmarkedBooks } from "@/lib/actions"

import BookItem2Container from "@/ui/books/book-item2-container"
import Header from "@/ui/header"

import { users  } from "@/lib/placeholder-data"

export default async function Page() {
    const user = users.find(user => user.id === 1) 
    let userBookmarkedBooks: BookDetails[] = []
    if ( user) 
        userBookmarkedBooks = await fetchUserBookmarkedBooks(user)

    return (
        <main dir="rtl" className="flex flex-col justify-between p-6">
            <div className="mb-8">
                <Header />
            </div>
            <div className="flex flex-col mb-8 w-full">
                <h2 className="text-xl mb-3">علاقه مندی ها</h2>
                <hr className="w-full opacity-20"/>
            </div>

            <div className="">
                <BookItem2Container books={userBookmarkedBooks}/>
            </div>
        </main>
    )
}