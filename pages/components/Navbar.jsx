import Link from "next/link"

import { ArrowSmRightIcon } from '@heroicons/react/solid'

export default function Navbar() {
    return (
        <div className="py-4 border-b-2 rounded-lg shadow-xl secondary dark:border-beige dark:border-opacity-70">
            <div className="sm:flex sm:px-[10%] sm:justify-between">
                <h1 className="text-lg md:text-2xl font-semibold hover:opacity-[0.85] sm:text-left text-center my-auto">
                    <Link href={'/'}>
                        <a>shadyforge events</a>
                    </Link>
                </h1>
                <Link href={'https://bit.ly/3A7uo2s'}>
                    <a>
                        <button className="button text-xs sm:text-lg primary hover:opacity-[0.85] hidden sm:flex">
                            Ditch your scheduling spreadsheet
                            <ArrowSmRightIcon className="h-[18px]" />
                        </button>
                    </a>
                </Link>
            </div>
        </div>
    )
}