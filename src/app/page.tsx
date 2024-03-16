import { fetchFeaturedBooks, fetchLatestBooks, fetchCategories } from "@/lib/actions";

import Search from "@/ui/search";
import Header from "@/ui/header";
import BookItem1Container from "@/ui/books/book-item1-container";
import BookItem2Container from "@/ui/books/book-item2-container";
import CategoryItemContainer from "@/ui/categories/category-item-container";

export default async function Home({searchParams} : { searchParams: {category: string}}) {

  const categories = await fetchCategories()
  const featuredBooks = await fetchFeaturedBooks(searchParams.category) // fetch according to category for both 
  const latestBooks = await fetchLatestBooks(searchParams.category) 

  let searchPlaceHolder : string = 'گه ران'
  if ( searchParams.category ) {
    searchPlaceHolder = `گه ران له نیو ${categories.find(cat => cat.slug === searchParams.category)?.name}`
  }

  return (
    <main dir="rtl" className="flex flex-col justify-between p-6">
      <div className="mb-8">
        <Header />
      </div>

      <div className="mb-8">
        <Search placeholder={searchPlaceHolder}/>
      </div>

      <div>
        <CategoryItemContainer categories={categories}/>
      </div>

      <div className="pt-6 mb-6">
        <h1 className="font-semibold text-xl mb-5">کتیبی چاک</h1>
        <BookItem1Container books={featuredBooks}/>
      </div>

      <div className="">
        <h1 className="font-semibold text-xl mb-5">کتیبی نوی</h1>
        <BookItem2Container books={latestBooks}/>

      </div>
      
    </main>
  );
}
