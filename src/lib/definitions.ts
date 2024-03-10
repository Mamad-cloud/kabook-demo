export type Category = {
    id: number,
    name: string,
    slug: string,
    color: string,
    
}

export type Book = {
    id: number,
    title: string,
    img: string,
    author: string,
    slug: string
}

export type BookDetails = {
    id: number, // link
    title: string,
    img: string,
    author: string,
    slug: string,
    desc: string,
    price: number,
    categories: string[],
    genre: string,
    publisherID: string,
    datePublished: string,
    numberOfPages: number,
    color1: string,
    color2: string
}

export type Review = {
    review_id: number,  // unique id for the review 
    user_id: number, // link to user.id
    book_id: number, // link to book.id
    review: string,
    rating: number
}