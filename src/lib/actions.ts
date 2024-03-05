'use server'

import { Book, BookDetails } from "@/lib/definitions"
import { unstable_noStore as noStore } from "next/cache"

export async function fetchFeaturedBooks() {
    noStore()
    const books: Book[] = [
        {
            id: 1,
            title: "چیشت",
            author: "hazhar",
            img: "/pic.png",
            slug: 'chesht1',
        },
        {
            id: 2,
            title: "dچیشت",
            author: "hazhar",
            img: "/pic.png",
            slug: 'chesht2',
        },
        {
            id: 3,
            title: "dچیشت",
            author: "hazhar",
            img: "/pic.png",
            slug: 'chesht3',
        },
        {
            id: 4,
            title: "dچیشت",
            author: "hazhar",
            img: "/pic.png",
            slug: 'chesht4',
        },

    ]
    console.log(process.env.REST_API_URL)

    // artificially delay response for emulating server
    const data = await new Promise<Book[]>((res) => { setTimeout(() => { res(books) }, 1000) })

    return data
    //const featured = await fetch(`${process.env.REST_API_URL!}/books`)
    //return await featured.json()
}

export async function fetchBookDetails(id: number | string) {
   // noStore()
    return await new Promise<BookDetails>((res) => {
        setTimeout(() => {
            res({
                id: 1,
                title: 'chesht',
                author: 'hazhar',
                slug: 'chesht1',
                publisherID: '123',
                categories: ['realism', 'biography'],
                genre: 'history',
                datePublished: new Date().toISOString().split('T')[0],
                desc: "this is the description it can be a loooooong text",
                img: '/pic.png',
                numberOfPages: 300,
                price: 300000

            })
        }, 1000)

    })

}

// TODO: implement this two
export async function fetchUserPurchasedBooks() {
     // ...
} 


export async function fetchUserBookmarkedBooks() {
    // ...
} 
