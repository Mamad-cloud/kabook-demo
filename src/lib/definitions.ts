type Role = 'basic' | 'author' | 'publisher'

export type User = {
    id: number,
    imgUrl: string,
    username: string,
    password: string,
    displayName: string,
    role: Role
}

export type Author = User & {
    authorId: number,

}

export type Publisher = User & {
    publisherId: number,

}

export type Category = {
    id: number,
    name: string,
    slug: string,
    color: string,
    imgUrl?: string
    alt?: string
}

export type BookDetails = {
    id: number, // link
    title: string,
    img: string,
    author: string,
    slug: string,
    ePubUrl?: string,
    audioUrl?: string,
    desc: string,
    price: number,
    categories: string[],
    genre: string,
    publisherID: string,
    datePublished: string,
    numberOfPages: number,
    color1: string,
    color2: string,
    score: number
}

export type EpubURL = {
    id: number,
    bookId: number,
    url: string
}

export type AudioURL = {
    id: number,
    bookId: number,
    url: string
}

export type PurchasedBook = Map<number, {ePubURL: string, audioURL?: string}>


export type Review = {
    id: number,  // unique id for the review 
    user_id: number, // link to user.id
    book_id: number, // link to book.id
    review: string,
    score: number
}

export type CartItem = {
    id: number,
    user_id: number,
    book_id: number,
}

export type Bookmark = {
    id: number,
    user_id: number,
    book_id: number,
}

export type Purchased = {
    id: number,
    user_id: number,
    book_id: number,
}

export type Discounts = {
    id: number,
    book_id: number,
    amount: number,
}