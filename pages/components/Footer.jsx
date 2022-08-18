import Link from "next/link"
import Image from 'next/future/image'

import logo from '/public/images/initialslogo.png'
import { MailIcon, PhoneIcon } from '@heroicons/react/solid'

export default function Footer() {
    return (
        <div className="py-4 border-b-2 rounded-lg shadow-xl bg-chocy sm:px-[10%]">
            <div className="p-4">
                <Image src={logo} className='w-[48px]' alt='shadyforge logo'></Image>
                <h1 className="text-2xl font-semibold text-beige hover:opacity-[0.85] text-left">
                    <Link href={'/'}>
                        <a>shadyforge</a>
                    </Link>
                </h1>
                <div className="flex items-center justify-start">
                    <div className="flex gap-2 text-beige hover:opacity-[0.85]">
                        <Link href={'mailto:hi@shadyforge.com'}>
                            <a><MailIcon className="h-[16px] my-auto flex items-center justify-center" /></a>
                        </Link>
                        <Link href={'tel:209-877-5227'}>
                            <a><PhoneIcon className="h-[16px] my-auto flex items-center justify-center" /></a>
                        </Link>
                    </div>
                </div>
                <h2 className="my-5 text-left text-md text-beige">
                    1475 N Scottsdale Road,<br />Room 1951<br />
                    Scottsdale, AZ 85257-3504
                </h2>
                <div className="text-sm text-left text-beige">
                    <p>Illustrations by <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons8</a> from <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Ouch!</a>
                    </p>
                    <p>Copyright © 2022 Shadyforge LLC. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}