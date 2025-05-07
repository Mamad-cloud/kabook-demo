'use server'

// import { unstable_noStore as noStore } from "next/cache"

import {BookDetails, Category, User } from "@/lib/definitions"
import { categories, books, epubURLs, bookmarked, purchased, audioURLs} from '@/lib/placeholder-data'

// TODO: implement the filtering according to categories and bookId
// TODO: look into graphQL


export async function addToCart(formData: FormData) {

}

export async function fetchBookAudioURL(slug: string) {
    const book = await fetchBookDetails(slug)
    //console.log(book, __filename)
    return await new Promise<string>((res) => {
        setTimeout(() => {
            if ( book ) 
            {
                const audioURL = audioURLs.find(audioURL => audioURL.bookId === book.id)
                if ( audioURL ) {
                    res(audioURL.url)
                } else {
                    throw new Error(`url does not exist for ${book.title}`)
                }
            } 
        }, 200)
    })

}

export async function fetchBookEpubURL(slug: string) {
    const book = await fetchBookDetails(slug)
    //console.log(book, __filename)
    return await new Promise<string>((res) => {
        setTimeout(() => {
            if ( book ) 
            {
                const epubUrl = epubURLs.find(ePubURL => ePubURL.bookId === book.id)
                if ( epubUrl ) {
                    res(epubUrl.url)
                } else {
                    throw new Error(`url does not exist for ${book.title}`)
                }
            } 
        }, 200)
    })

}

export async function searchBooks(category?: string, query?: string) {
    const queried = await queryBooks(query)
    return await new Promise<BookDetails[]>( (res) => {
        setTimeout(() => {
            if ( category )
            {
                const results = queried.filter(book => book.categories.includes(category))
                res(results)
            } else {
                res(queried)
            }

        }, 100)
    })

   

}

export async function queryBooks(query?: string) {

    return await new Promise<BookDetails[]>( ( res) => {
        setTimeout(() => {
            if (query) {
                const results = books.filter(book => book.title.includes(query) || book.author.includes(query))
                res(results)
            } else {
                res(books)
            }

            
        }, 100)
    })
    
}

export async function fetchCategories() {
    // noStore()

    //const data = await fetch('http://kabook.org/acf/categories/')
    return await new Promise<Category[]> ((res) => {
        setTimeout(() => {
            res(categories)
        }, 500)
    })
}

export async function fetchFeaturedBooks(category: string) {
    //noStore()
    
    //console.log(process.env.REST_API_URL)

    // artificially delay response for emulating server
    const data = await new Promise<BookDetails[]>((res) => { 
        setTimeout(() => { 
            if ( category ) {
                 const filterd = books.filter(book => book.categories.includes(category))
                res(filterd)
            } else {
                res(books)
            }
            
        }, 1000) 
    })

    return data
    //const featured = await fetch(`${process.env.REST_API_URL!}/books`)
    //return await featured.json()
}

export async function fetchLatestBooks(category: string) {
    //noStore()

     const data = await new Promise<BookDetails[]>((res) => { 
        setTimeout(() => { 
            if ( category ) {
                const filterd = books.filter(book => book.categories.includes(category))
                res(filterd)
            } else {
                res(books)
            }
            
        }, 1000) 
    })

    return data
       
}

export async function fetchBookDetails(slug: string) {
   // noStore()
    return await new Promise<BookDetails>((res) => {
        setTimeout(() => {
            const book = books.find(book => book.slug === slug)
            if (book )
                res(book)
            else throw Error(`book couldn't be found make sure you are accessing the correct url`)
        }, 1000)

    })

}

// TODO: implement this two
export async function fetchUserPurchasedBooks(user: User) {
    return await new Promise<BookDetails[]>((res) => {
        setTimeout(() => {
            const purchases = purchased.filter( bookmark => bookmark.user_id === user.id)
            const userPurchases: BookDetails[] = []
            
            purchases.forEach( purchase => {
                const _book = books.find(book => book.id === purchase.book_id)
                if ( _book ) userPurchases.push(_book)
            })
            
            res(userPurchases)

        }, 100)
    })
} 


export async function fetchUserBookmarkedBooks(user: User) {
    return await new Promise<BookDetails[]>((res) => {
        setTimeout(() => {
            const bookmarks = bookmarked.filter( bookmark => bookmark.user_id === user.id)
            const userBookmarks: BookDetails[] = []
            
            bookmarks.forEach( bookmark => {
                const _book = books.find(book => book.id === bookmark.book_id)
                if ( _book ) userBookmarks.push(_book)
            })
            
            res(userBookmarks)

        }, 100)
    })
} 
