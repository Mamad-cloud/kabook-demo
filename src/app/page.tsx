import { fetchFeaturedBooks } from "@/lib/actions";
import BookItem1Container from "@/ui/book-item1-container";

export default async function Home() {

  const featuredBooks = await fetchFeaturedBooks()

  return (
    <main dir="rtl" className="flex flex-col justify-between p-6">
      <div>
        <h1 className="font-semibold text-xl mb-5">کتیبی چاک</h1>
        <BookItem1Container books={featuredBooks}/>

      </div>
      
    </main>
  );
}
