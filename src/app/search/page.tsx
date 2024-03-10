import { fetchCategories } from "@/lib/actions";
import CategoryItemContainer from "@/ui/categories/category-item-container";
import Search from "@/ui/search";
import SearchResults from "@/ui/search-results";
import { Suspense } from "react";

export default async function Page({searchParams} : {searchParams: {query?: string, category?: string}}) {
    const categories = await fetchCategories()

    let searchPlaceHolder: string = 'گه ران'
    if (searchParams.category) {
        searchPlaceHolder = `گه ران له نیو ${categories.find(cat => cat.slug === searchParams.category)?.name}`
    }

    return (
        <main dir="rtl" className="flex flex-col justify-between p-6">
            <div className="mb-7">
                <Search placeholder={searchPlaceHolder}/>
            </div>
            <div className="mb-7">
                <CategoryItemContainer categories={categories}/>

            </div>
            <div> { searchParams.query &&
                    <Suspense fallback={`searching for ${searchParams.query}`}>
                        <SearchResults category={searchParams.category} query={searchParams.query}/>

                    </Suspense>
                }
            </div>
        </main>
    )
}