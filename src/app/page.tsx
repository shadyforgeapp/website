import Link from 'next/link'
import Image from 'next/image'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const projects = [
  {
    name: 'daydule',
    description: 'day-of schedules for planners',
    url: 'https://daydule.com',
    logo: '/daydule.svg',
    model: 'b2b',
    year: '2023',
  },
  {
    name: 'keyzz',
    description: 'api key billing & mgmt',
    url: 'https://keyzz.dev',
    logo: '/keyzz.svg',
    model: 'b2c',
    year: '2023',
  },
]

export default async function Home() {
  return (
    <main className='font-editorialul min-h-screen max-w-full items-center px-6 pb-16'>
      <div className='rounded-b-sm border-b-[1.5px] border-b-stone-400 border-opacity-20 py-4'>
        <h1 className=' text-xl text-stone-600'>shadyforge</h1>
        <h2 className='tracking-tight text-stone-400 '>by mani & friends</h2>
      </div>
      <h2 className='py-4 text-lg'>products</h2>
      <TooltipProvider>
        <ScrollArea className='whitespace-nowrap'>
          <div className='flex w-max space-x-6'>
            <Tooltip>
              <TooltipTrigger>
                <div className='flex h-64 w-64 items-center justify-center rounded-2xl border-[0.25px] border-stone-400 border-opacity-40 bg-stone-50'>
                  <div className='rounded-md'>
                    <Link href={'https://plzreply.com'}>
                      <h2 className='font-fonty glowing-text whitespace-nowrap text-3xl text-[#00b0c8]'>
                        Plz Reply
                      </h2>
                    </Link>
                  </div>
                </div>
                <p className='py-[6px] pl-[10px] text-xs text-stone-400'>
                  2023 &nbsp;with{' '}
                  <Link
                    className='underline'
                    href={'https://twitter.com/eabnelson'}
                  >
                    erik
                  </Link>
                </p>
              </TooltipTrigger>
              <TooltipContent>
                <p className='px-[8px] py-[px]'>send messages to space</p>
              </TooltipContent>
            </Tooltip>

            {projects
              .slice()
              .reverse()
              .map((project) => (
                <div>
                  <Tooltip>
                    <TooltipTrigger>
                      <div
                        key={project.name}
                        className='flex h-64 w-64 items-center justify-center rounded-2xl border-[0.25px] border-stone-400 border-opacity-40 bg-stone-50'
                      >
                        <div className='rounded-md'>
                          <Link href={project.url}>
                            <Image
                              className='w-24'
                              alt={`${project.name} logo`}
                              src={project.logo}
                              width={96}
                              height={24}
                            />
                          </Link>
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className='px-[8px] py-[px]'>{project.description}</p>
                    </TooltipContent>
                    <p className='py-[6px] pl-[10px] text-xs text-stone-400'>
                      {project.year}
                    </p>
                  </Tooltip>
                </div>
              ))}
          </div>
          <ScrollBar orientation='horizontal' />
        </ScrollArea>

        <h2 className='pb-4 pt-12 text-lg'>projects</h2>
          <ScrollArea className='whitespace-nowrap'>
            <div className='flex w-max space-x-6'>
              <Tooltip>
              <TooltipTrigger>
              <div>
                <div className='flex h-64 w-64 items-center justify-center rounded-2xl border-[0.25px] border-stone-400 border-opacity-40 bg-stone-50'>
                  <div className='rounded-md'>
                    <Link href={'https://github.com/mkandan/gae-pytube'}>
                      <h2 className='font-sans text-3xl'>you-cap</h2>
                    </Link>
                  </div>
                </div>
                <p className='py-[6px] pl-[12px] text-xs text-stone-400'>2023</p>
              </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className='px-[8px] py-[px]'>ai-generated youtube captions</p>
              </TooltipContent>
              </Tooltip>
            </div>
            <ScrollBar orientation='horizontal' />
          </ScrollArea>

        <h2 className='py-4 text-lg'>links</h2>
        <div className='tracking-tight text-stone-400'>
          <Link href={'https://twitter.com/man1_kandan'}>twitter</Link>
          <br />
          <Link href={'https://github.com/mkandan'}>github</Link>
        </div>
      </TooltipProvider>
    </main>
  )
}
