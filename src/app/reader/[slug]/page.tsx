import Reader from "@/ui/reader"
import { fetchBookEpubURL } from "@/lib/actions"

export default async function Page({params}: {params:{slug: string}}) {

   // console.log(params.slug)
    const bookEpubURL = await fetchBookEpubURL(params.slug)

    return (
        <div dir="ltr" className="h-screen w-full">
            <Reader url={bookEpubURL}/>
        </div>
    )    
}