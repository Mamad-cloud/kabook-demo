import { fetchFeaturedBooks } from "@/lib/actions";

import BookItem1Container from "@/ui/book-item1-container";

import { Suspense } from "react";


export default async function Home() {

  const featuredBooks = await fetchFeaturedBooks()

  return (
    <main dir="rtl" className="flex min-h-screen flex-col items-center justify-between p-7">
      <BookItem1Container books={featuredBooks}/>

      
    </main>
  );
}
