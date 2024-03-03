'use server'

import { Book } from "@/lib/definitions"

export async function fetchFeaturedBooks() {

    const books: Book[] = [
        {
            title: "چیشت",
            author: "hazhar",
            img: "/pic.png",
            slug: 'chesht1',
        },
        {
            title: "dچیشت",
            author: "hazhar",
            img: "/pic.png",
            slug: 'chesht2',
        },
        {
            title: "dچیشت",
            author: "hazhar",
            img: "/pic.png",
            slug: 'chesht3',
        },
        {
            title: "dچیشت",
            author: "hazhar",
            img: "/pic.png",
            slug: 'chesht4',
        },
    
    ]
    console.log(process.env.REST_API_URL)

    // artificially delay response for emulating server
    const data = await new Promise<Book[]>( (res) => { setTimeout(() => {res(books)}, 1000) })
    
    return data
    //const featured = await fetch(`${process.env.REST_API_URL!}/books`)
    //return await featured.json()
}