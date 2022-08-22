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

      <main className="py-5 secondary">
        <div className="whiteSpaceMargins">
          <h1 className="py-5 text-4xl font-bold tracking-tight text-center sm:tracking-normal sm:text-6xl sm:max-w-2xl sm:mx-auto">
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
          <h2 className="mx-auto text-lg text-center opacity-75 text-md sm:max-w-lg md:max-w-3xl sm:px-0 sm:text-xl">
            Look fab 💅🏾 while you do it all. Our scheduling & management tool makes event prep, team delegation, and vendor tracking easier than ever before for event planners.
          </h2>
          <div className="text-center py-[8%]">
            <Link href={'https://bit.ly/3A7uo2s'}>
              <a>
                <button onClick={() => Panelbear.track('SignupWaitlistLandingHero')} className="button text-lg sm:text-xl primary hover:opacity-[0.85]">Join the waitlist
                  <ClipboardListIcon className="h-[18px] ml-[6px]" />
                </button>
              </a>
            </Link>
          </div>
          <div className="p-5 m-16 rounded-lg shadow-lg md:m-5 primary ">
            <h1 className="text-2xl font-semibold text-center sm:text-3xl sm:text-left">We&apos;ve organized</h1>
            <div className="grid gap-5 my-5 sm:grid-cols-3">
              <div className="card">
                <h1 className="cardCaption">23 IRL events</h1>
                <Image src={calendar} alt='calendar' className="mx-auto w-[40%] sm:w-[60%]" />
              </div>
              <div className="card">
                <h1 className="cardCaption">for 1156 Guests</h1>
                <Image src={guests} alt='guests' className="mx-auto w-[40%] sm:w-[60%]" />
              </div>
              <div className="card">
                <h1 className="cardCaption">{`with < 25 Team members`}</h1>
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
