import Head from "next/head";
import Image from 'next/future/image'
import Link from "next/link";

import calendar from '/public/images/calendar.png'
import guests from '/public/images/guest group.png'
import team_construction from '/public/images/WIP construction.png'
//for footer component
import logo from '/public/images/initialslogo.png'

import { ClipboardListIcon } from '@heroicons/react/solid'
import Typewriter from 'typewriter-effect';
import * as Panelbear from "@panelbear/panelbear-js"

export default function Home() {
  return (
    <div>
      <Head>
        <title>shadyforge</title>
        <meta name="description" content="Shadyforge LLC" />
      </Head>

      <main className="py-5 bg-beige">
        <div className="sm:mx-[5%] md:mx-[10%] lg:mx-[20%]">
          <h1 className="py-5 text-4xl font-bold tracking-tight text-center sm:tracking-normal sm:text-6xl sm:max-w-2xl sm:mx-auto text-chocy">
            Never stress about
            <Typewriter
              options={{
                autoStart: true,
                deleteSpeed: 20,
              }}
              onInit={(typewriter) => {
                typewriter.typeString(' event schedules again.')
                  .pauseFor(1900 - 500)
                  .deleteChars(22 + 1)
                  .start()
                typewriter.typeString(' messy spreadsheets')
                  .pauseFor(1900 - 500)
                  .deleteChars(18 + 1)
                typewriter.typeString(' teams & vendors')
                  .pauseFor(1900 - 500)
                  .deleteChars(15 + 1)
                typewriter.typeString(' what\'s next')
                  .pauseFor(1900 - 500)
                  .deleteChars(11 + 1)
                typewriter.typeString(' event planning again.')
              }}
            />
          </h1>
          <h2 className="text-center text-md text-chocy mx-[10%]
          sm:max-w-lg md:max-w-2xl sm:px-0 text-lg sm:text-xl opacity-75">
            Look fab 💅🏾 while do you do it all. We work with event planners to make event prep, team delegation, and vendor tracking easier than ever before.
          </h2>
          <div className="text-center py-[8%]">
            <Link href={'https://bit.ly/3A7uo2s'}>
              <a>
                <button onClick={() => Panelbear.track('SignupWaitlistLandingHero')} className="button text-lg sm:text-xl bg-chocy text-beige hover:opacity-[0.85]">Join the waitlist
                  <ClipboardListIcon className="h-[18px] ml-[6px]" />
                </button>
              </a>
            </Link>
          </div>
          <div className="p-5 m-5 rounded-lg shadow-lg bg-chocy ">
            <h1 className="text-2xl font-semibold text-center sm:text-3xl text-beige sm:text-left">We&apos;ve organized</h1>
            <div className="grid gap-5 my-5 sm:grid-cols-3">
              <div className="flex flex-col p-5 duration-300 rounded-lg shadow-lg bg-beige hover:scale-105">
                <h1 className="py-2 font-semibold text-center text-md text-chocy">23 IRL events</h1>
                <Image src={calendar} alt='calendar' className="mx-auto w-[40%] sm:w-[60%]" />
              </div>
              <div className="flex flex-col p-5 duration-300 rounded-lg shadow-lg bg-beige hover:scale-105">
                <h1 className="py-2 font-semibold text-center text-md text-chocy">for 1156 Guests</h1>
                <Image src={guests} alt='guests' className="mx-auto w-[40%] sm:w-[60%]" />
              </div>
              <div className="flex flex-col p-5 duration-300 rounded-lg shadow-lg bg-beige hover:scale-105">
                <h1 className="py-2 font-semibold text-center text-md text-chocy">{`with < 25 Team members`}</h1>
                <Image src={team_construction} alt='team size' className="mx-auto w-[40%] sm:w-[60%]" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="">
      </footer>
    </div>
  )
}
