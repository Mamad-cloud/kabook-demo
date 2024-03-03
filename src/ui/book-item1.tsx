import Image from "next/image"
import Link from "next/link"
export default function BookItem1({ title, author, img, slug }: { title: string, author: string, img: string, slug: string }) {

    const searchParams = new URLSearchParams()
    searchParams.set('book', slug)

    return (
        <Link href={`/library/${slug}`}>
            <div className="relative flex flex-col items-center">
                <div className="flex h-48 w-32 bg-gray-500 rounded-l-lg overflow-clip justify-center items-center">
                    <Image src={img} alt={title} width={150} height={200} />
                </div>
                <p>{title}</p>
                <p>{author}</p>
            </div>
        </Link>

    )
}