'use client'

import { ShoppingCartIcon } from '@heroicons/react/24/outline'

import { users, cartItems } from '@/lib/placeholder-data';

import Link from 'next/link';

// TODO: how on earth does one use an svg

export default async function Header() {
    let loggedIn = false 
    let cartItemsAmount = 0

    const user = users.find(user => user.id === 1)
    if (user) {
        loggedIn = true
        const itemsInCart = cartItems.filter( cartItem => cartItem.user_id = user.id)
        cartItemsAmount = itemsInCart.length
    }


    return (
        <div className="flex flex-row w-full justify-between">
            <div className="flex flex-row items-center justify-center gap-4">
                {loggedIn ?
                    <>
                        <Link href={`/settings`}>
                            <div className="h-[50px] w-[50px] rounded-full overflow-clip bg-[#242424]">
                                <img src={user?.imgUrl} alt="" />
                            </div>
                        </Link>

                        <h3 className='text-lg'>سلام {user?.displayName} !</h3>
                    </> : 
                    <>
                        <Link href={`/login`} >Login</Link> | <Link href={`/signup`}>SignUp</Link>
                    </>
                }
            </div>

            <Link href={`/cart`}>
                <div className="flex relative justify-center items-center w-[50px] h-[50px] rounded-full bg-[#272727]">
                    {/* Badge */}
                    {cartItemsAmount > 0 ?  <div className='absolute flex justify-center -top-2 -right-2 items-center w-5 h-5 rounded-full bg-red-900 text-xs text-white'>{cartItemsAmount.toLocaleString('fa-IR')}</div>: null}
                   
                    <ShoppingCartIcon width={20} height={20} />
                </div>
            </Link>

        </div>
    )
}