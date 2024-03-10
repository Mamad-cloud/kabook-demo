'use client';
import Link from 'next/link';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }: { placeholder: string }) {

    const pathName = usePathname()
    const searchParams = useSearchParams()
    const { replace } = useRouter()

    // debouncing is soooo cool 
    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams)

        params.set('page', '1')

        if (term) {
            params.set('query', term)
        } else {
            params.delete('query')
            params.delete('page')
        }

        replace(`${pathName}?${params.toString()}`)
    }, 300)

    return (
        <div className="relative flex flex-row gap-5 ">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input
                onChange={(e) => { handleSearch(e.target.value) }}
                className=" block w-full rounded-full py-[9px] pr-8 text-sm bg-[#313131] placeholder:text-[#6A6A6A]"
                placeholder={placeholder}
                defaultValue={searchParams.get('query')?.toString()}
            />
            <Link href={`/search?${searchParams.toString()}`} className='flex justify-center items-center h-[50px] w-[50px] rounded-full bg-[#3A3A3A]  text-[#fafafa]'>
                <MagnifyingGlassIcon className=" h-[20px] w-[20px] " />
            </Link>
        </div>
    );
}
