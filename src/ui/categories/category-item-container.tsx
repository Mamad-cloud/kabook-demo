import AllCategories from "@/ui/categories/all-categories";
import CategoryItem from "@/ui/categories/category";

import { Category } from "@/lib/definitions";

// TODO: add icons for each category

export default function CategoryItemContainer({categories}: {categories: Category[]}) {
  

    return (
        <div className="flex flex-row w-full items-start gap-8 overflow-auto snap-x touch-pan-x no-scrollbar">
            <AllCategories />
            {categories.map( category => <CategoryItem key={category.id} id={category.id} color={category.color} name={category.name} slug={category.slug} />)}
        </div>
    )
}