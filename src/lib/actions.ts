'use server'

import { Book, BookDetails, Category } from "@/lib/definitions"
import { unstable_noStore as noStore } from "next/cache"

// TODO: implement the filtering according to categories and bookId
// TODO: look into graphQL

const categories: Category[] = [
    {
        id:1,
        name: 'تخیلی',
        color: "#551722",
        slug: 'fiction'
    },
    {
        id:2,
        name: 'رمان',
        color: '#272727',
        slug: 'novel'
    }, 
    {
        id:3,
        name: 'شعر',
        color: '#162C4E',
        slug: 'poetry'
    }, 
]

const books: BookDetails[] = [
    {
        id: 1,
        title: "title",
        author: "author",
        img: "/pic.png",
        slug: 'slug',
        desc: "description",
        price: 999999,
        categories: ['fiction'],
        genre: 'horror',
        datePublished: '2022/12/12',
        numberOfPages: 999,
        publisherID: '123',
        color1: '#662E2E',
        color2: '#EB6767'
    },

    {
        id: 2,
        title: "title2",
        author: "author2",
        img: "/pic.png",
        slug: 'slug2',
        desc: "description2",
        price: 999999,
        categories: ['novel'],
        genre: 'horror',
        datePublished: '2022/12/12',
        numberOfPages: 999,
        publisherID: '1232',
        color1: '#6F543C',
        color2: '#6F543C'
    },

    {
        id: 3,
        title: "title3",
        author: "author3",
        img: "/pic.png",
        slug: 'slug3',
        desc: "description3",
        price: 999999,
        categories: [''],
        genre: 'horror',
        datePublished: '2022/12/12',
        numberOfPages: 999,
        publisherID: '1232',
        color1: '#AFAFAF',
        color2: '#AFAFAF'
    },

]

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

    return await new Promise<Category[]> ((res) => {
        setTimeout(() => {
            res(categories)
        }, 500)
    })
}

export async function fetchFeaturedBooks(category: string) {
    //noStore()
    
    console.log(process.env.REST_API_URL)

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
export async function fetchUserPurchasedBooks() {
     // ...
} 


export async function fetchUserBookmarkedBooks() {
    // ...
} 
