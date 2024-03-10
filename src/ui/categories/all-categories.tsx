'use client'

import clsx from "clsx"

import Link from "next/link"
import { useSearchParams, usePathname } from "next/navigation"

import CategoryPlaceholder from "@/ui/categories/category-placeholder"

// TODO: fix urls, you shouldnt depend on the search params 

export default function AllCategories() {

    const pathName = usePathname()
    const searchParams = useSearchParams()
    
    const newParams = new URLSearchParams(searchParams)
    newParams.delete('category')
    
    const category = searchParams.get('category')


    return (

        <div className="flex flex-col w-10">
            <Link href={`${pathName}?${newParams.toString()}`}>
                <div className="relative grid w-full h-[50px]">
                    <div className="absolute flex w-[29px] h-[42px] justify-self-end">
                        <CategoryPlaceholder color="#272727" />
                    </div>

                    <div className="absolute w-[29px] h-[42px] place-self-center">
                        <CategoryPlaceholder color="#682929" />
                    </div>

                    <div className="absolute w-[29px] h-[42px] self-end">
                        <CategoryPlaceholder color="#685729" />
                    </div>
                </div>
                <div className="flex mt-2 justify-center">
                    <h4 className={clsx("opacity-100", { "opacity-40": category })}>همه</h4>

                </div>
            </Link>
        </div>

    )
}