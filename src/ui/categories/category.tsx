'use client'

import clsx from "clsx"
import CategoryPlaceholder from "@/ui/categories/category-placeholder"
import { Category } from "@/lib/definitions"
import { useSearchParams } from "next/navigation"
import Link from "next/link"

// TODO: optimistacally update the UI when the category is changed and display skeletons

export default function Category({name, color, slug }: Category) {
    
    const searchParams = useSearchParams()
    const category = searchParams.get('category')

    const newParams = new URLSearchParams(searchParams)
    newParams.set('category', slug) 

    return (
        <div className="flex flex-col w-10">
            <Link href={`?${newParams.toString()}`}>
                <div className="relative grid w-full h-[50px]">
                    <CategoryPlaceholder color={color} />
                </div>
                <div className="flex mt-2 justify-center">
                    <h4 className={clsx("opacity-100", { "opacity-40": category !== slug })}>{name}</h4>

                </div>
            </Link>

        </div>
    )
}