import Link from "next/link"

import { ArrowSmRightIcon } from '@heroicons/react/solid'

export default function Navbar() {
    return (
        <div className="py-4 border-b-2 rounded-lg shadow-xl bg-beige">
            <div className="sm:flex sm:px-[10%] sm:justify-between">
                <h1 className="text-lg md:text-2xl font-semibold text-chocy hover:opacity-[0.85] sm:text-left text-center">
                    <Link href={'/'}>
                        <a>shadyforge events</a>
                    </Link>
                </h1>
                <Link href={'https://bit.ly/3A7uo2s'}>
                    <a>
                        <button className="button text-xs sm:text-lg bg-chocy text-beige hover:opacity-[0.85] hidden sm:flex">
                            Ditch your scheduling spreadsheet
                            <ArrowSmRightIcon className="h-[18px]" />
                        </button>
                    </a>
                </Link>
            </div>
        </div>
    )
}