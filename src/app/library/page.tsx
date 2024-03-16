
import { BookDetails } from "@/lib/definitions"
import { fetchBookAudioURL, fetchBookEpubURL, fetchUserPurchasedBooks } from "@/lib/actions"

import LibraryBookContainer from "@/ui/library/library-book-container"

import { users  } from "@/lib/placeholder-data"
import Header from "@/ui/header"

export default async function Page() {
    const user = users.find(user => user.id === 1) 
    let userPurchasedBooks: BookDetails[] = []
    let userPurchasedBookURLs = new Map<number, {ePubURL: string, audioURL?: string}>()
    
    if ( user) 
        userPurchasedBooks = await fetchUserPurchasedBooks(user)
    if ( userPurchasedBooks.length > 0) {
        for ( let book of userPurchasedBooks ) {
            userPurchasedBookURLs.set(book.id, {ePubURL: await fetchBookEpubURL(book.slug), audioURL: await fetchBookAudioURL(book.slug)})
        }

        
    }

    return (
        <main dir="rtl" className="flex flex-col justify-between p-6">
            <div className="mb-8">
                <Header />
            </div>
            <div className="flex flex-col mb-8 w-full">
                <h2 className="text-xl mb-3">کتابخانه من</h2>
                <hr className="w-full opacity-20"/>
            </div>

            <div className="">
                <LibraryBookContainer books={userPurchasedBooks} bookUrls={userPurchasedBookURLs}/>
            </div>
        </main>
    )
}