
import { AudioURL, BookDetails, Bookmark, CartItem, Category, EpubURL, Purchased, User } from "@/lib/definitions"

export const categories: Category[] = [
    {
        id:1,
        name: 'تخیلی',
        color: "#551722",
        slug: 'fiction',
        imgUrl: '/category_icons/fiction.svg',
        alt: 'fiction'
    },
    {
        id:2,
        name: 'رمان',
        color: '#272727',
        slug: 'novel',
        imgUrl: '/category_icons/novel.svg',
        alt: 'novel'
    }, 
    {
        id:3,
        name: 'شعر',
        color: '#162C4E',
        slug: 'poetry'
    }, 
]

export const books: BookDetails[] = [
    {
        id: 1,
        title: "چیشتی مجیور",
        author: "عبدالرحمن شرفکندی",
        img: "/cheshti-mjevor.png",
        slug: 'slug1',
        ePubUrl: '/sway.epub',
        desc: `چیشتی مجیور داستان زندگی"هه ژار" این سرور ادبیات کرد و رونمایی واقعیت از دورانی از تاریخ این ملت از زبان ادیبانه ی اوست."چیشتی مجیور" داستان پندار و گفتار و کردار این ملت نیز هست و هریک از ما می تواند با اندکی بینش بخشی یا تمام وجود یک انسان کرد را در آن بازیابد.چیشتی مجیور داستان هر کردی می تواند باشد"`,
        price: 100000,
        categories: ['fiction'],
        genre: 'horror',
        datePublished: '2022/12/12',
        numberOfPages: 999,
        publisherID: '123',
        color1: '#662E2E',
        color2: '#EB6767',
        score: 0.1,
    },

    {
        id: 2,
        title: "دواشه‌وی دابه‌زینی عیسا",
        author: "author2",
        img: "/pic.png",
        slug: 'slug2',
        desc: "let's make these descriptions veryy long so we can see how it looks in the UI at the end don't you just love how long this text is it's just amazing it's almost as long as my schlong which is also very long and thick",
        price: 200000,
        categories: ['novel'],
        genre: 'horror',
        datePublished: '2022/12/12',
        numberOfPages: 999,
        publisherID: '1232',
        color1: '#6F543C',
        color2: '#6F543C',
        score: 6,
    },

    {
        id: 3,
        title: "title3",
        author: "author3",
        img: "/pic.png",
        slug: 'slug3',
        desc: "let's make these descriptions veryy long so we can see how it looks in the UI at the end don't you just love how long this text is it's just amazing it's almost as long as my schlong which is also very long and thick",
        price: 300000,
        categories: [''],
        genre: 'horror',
        datePublished: '2022/12/12',
        numberOfPages: 999,
        publisherID: '1232',
        color1: '#AFAFAF',
        color2: '#AFAFAF',
        score: 0,
    },
    {
        id: 4,
        title: "title4",
        author: "author4",
        img: "/pic.png",
        slug: 'slug4',
        desc: "let's make these descriptions veryy long so we can see how it looks in the UI at the end don't you just love how long this text is it's just amazing it's almost as long as my schlong which is also very long and thick",

        price: 400000,
        categories: ['novel'],
        genre: 'horror',
        datePublished: '2022/12/12',
        numberOfPages: 999,
        publisherID: '12324',
        color1: '#323232',
        color2: '#333333',
        score: 4,
    },

]

export const epubURLs: EpubURL[] = [
    {
        id:1,
        bookId: 1,
        url: '/sway.epub'
    },
    {
        id:2,
        bookId: 2,
        url: '/sway.epub'
    },
    {
        id:3,
        bookId: 3,
        url: '/sway.epub'
    },
    {
        id:4,
        bookId: 4,
        url: '/sway.epub'
    },
    
]

export const audioURLs: AudioURL[] = [
    {
        id:1,
        bookId: 1,
        url: '/audio.mp3'
    },
    {
        id:2,
        bookId: 2,
        url: '/audio.mp3'
    },
    {
        id:3,
        bookId: 3,
        url: '/audio.mp3'
    },
    {
        id:4,
        bookId: 4,
        url: '/audio.mp3'
    },
]

export const users: User[] = [
    {
        id: 1,
        username: 'dany',
        displayName: 'دانیال',
        imgUrl: '/pic.png',
        password: 'passwordHash',
        role: 'basic'
        
    }
]

export const cartItems: CartItem[] = [
    {
        id: 1,
        book_id: 1,
        user_id: 1,
    }
]

export const bookmarked: Bookmark[] = [
    {
        id:1,
        user_id: 1,
        book_id: 2,
    }
]

export const purchased: Purchased[] = [
    {
        id:1,
        user_id: 1,
        book_id: 3,
    }
]