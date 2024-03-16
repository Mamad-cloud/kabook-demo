
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
                <h2 className="text-xl mb-3">سبد خرید</h2>
                <hr className="w-full opacity-20"/>
            </div>

            <div className="mb-8">
                <BookItem2Container books={userBookmarkedBooks}/>
            </div>

            <div className="flex flex-col w-full justify-center items-center">
                <button className="w-full rounded-2xl p-7 bg-[#129938]">تکمیل خرید</button>
            </div>
        </main>
    )
}