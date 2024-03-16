import Header from "@/ui/header"
import { Cog6ToothIcon, InformationCircleIcon, LifebuoyIcon, ShoppingBagIcon, UserIcon  } from "@heroicons/react/24/outline"
import Link from "next/link"

export default function Page() {
    return (
        <main className="flex flex-col p-6 justify-between">
            <div className="mb-8">
                <Header />
            </div>

            <section className="flex flex-col bg-[#222222] bg-opacity-60 rounded-2xl w-full h-auto p-5 mb-8" >
                <Link href={`/`} className="flex flex-row gap-3 items-center w-full mb-3 mt-3">
                    <div className="flex justify-center items-center w-[60px] h-[60px] rounded-full bg-[#2D2D2D]">
                        <ShoppingBagIcon width={30} height={30}/>
                    </div>

                    <div className="flex">
                        <h2 className="text-lg">
                            سوابق خرید
                        </h2>
                    </div>
                </Link>
                <hr  className="w-full opacity-60"/>

                <Link href={`/`} className="flex flex-row gap-3 items-center w-full mb-3 mt-3">
                    <div className="flex justify-center items-center w-[60px] h-[60px] rounded-full bg-[#2D2D2D]">
                        <UserIcon width={30} height={30}/>
                    </div>

                    <div className="flex">
                        <h2 className="text-lg">
                            تنظیمات پروفایل 
                        </h2>
                    </div>
                </Link>
                <hr  className="w-full opacity-60"/>

                <Link href={`/`} className="flex flex-row gap-3 items-center w-full mb-3 mt-3">
                    <div className="flex justify-center items-center w-[60px] h-[60px] rounded-full bg-[#2D2D2D]">
                        <Cog6ToothIcon width={30} height={30}/>
                    </div>

                    <div className="flex">
                        <h2 className="text-lg">
                            تنظیمات برنامه 
                        </h2>
                    </div>

                </Link>
                <hr  className="w-full opacity-60"/>

                <Link href={`/`} className="flex flex-row gap-3 items-center w-full mb-3 mt-3">
                    <div className="flex justify-center items-center w-[60px] h-[60px] rounded-full bg-[#2D2D2D]">
                        <LifebuoyIcon width={30} height={30}/>
                    </div>

                    <div className="flex">
                        <h2 className="text-lg">
                            پشتیبانی و سوال های متداول
                        </h2>
                    </div>

                    
                </Link>
                <hr  className="w-full opacity-60"/>

                <Link href={`/`} className="flex flex-row gap-3 items-center w-full mb-3 mt-3">
                    <div className="flex justify-center items-center w-[60px] h-[60px] rounded-full bg-[#2D2D2D]">
                        <InformationCircleIcon width={30} height={30}/>
                    </div>

                    <div className="flex">
                        <h2 className="text-lg">
                             راهنمایی
                        </h2>
                    </div>


                </Link>
                

                

            </section>


            <section className="flex w-full h-auto">
                <button className="flex h-[60px] w-full justify-center items-center bg-[#974040] rounded-2xl">
                    خارج شوید
                </button>
            </section>

        </main>
    )
}