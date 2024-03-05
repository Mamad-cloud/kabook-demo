import Reader from "@/ui/reader"

export default async function Page({params}: {params:{slug?: string}}) {

    console.log(params.slug)
    return (
        <div dir="ltr" className="h-screen w-full">
            <Reader url={params.slug ? params.slug : '/sway.epub'}/>
        </div>
    )    
}