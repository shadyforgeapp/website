import Link from "next/link"

import { ArrowSmRightIcon } from '@heroicons/reactv1/solid'

export default function Navbar() {
    return (
        <div className="py-4 border-b-2 rounded-lg shadow-xl secondary dark:border-beige dark:border-opacity-70">
            <div
                className="whiteSpaceMargins md:px-5"
            >
                <div className="sm:flex sm:justify-between">
                    <h1 className="text-6xl md:text-7xl hover:opacity-[0.85] sm:text-center md:text-left text-center my-auto navAndFooterFont ">
                        <Link href={'/'}>
                            <a className="bronzeSmolderGradient">Shadyforge</a>
                        </Link>
                    </h1>
                    <Link href={'https://bit.ly/3A7uo2s'}>
                        <a className="my-auto">
                            <button className="button md:text-sm lg:text-sm xl:text-2xl primary hover:opacity-[0.85] hidden sm:hidden md:flex">
                                Ditch your scheduling spreadsheet
                                <ArrowSmRightIcon className="h-[18px] md:h-[18px] xl:h-[24px]" />
                            </button>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}