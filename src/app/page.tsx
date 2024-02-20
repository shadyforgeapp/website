import Link from 'next/link'
import Image from 'next/image'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger
} from '@/components/ui/hover-card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Info, CalendarDays, GitCommit } from 'lucide-react'
import { env } from '~/env'
import { getGithubRepoStats } from '~/server/github'

const projects = [
	{
		name: 'daydule',
		description: 'day-of schedules for planners',
		url: 'https://daydule.com',
		logo: '/daydule.svg',
		model: 'b2b',
		collab: '',
		year_start: 2023,
		year_end: 2023,
		github_owner: 'shadyforgeapp',
		github_repo: 'daydule',
		github_personal_access_token: env.GITHUB_SHADYFOREAPP_PERSONAL_ACCESS_TOKEN
	},
	{
		name: 'keyzz',
		description: 'api key spend & management',
		url: 'https://keyzz.dev',
		logo: '/keyzz.svg',
		model: 'b2c',
		collab: '',
		year_start: 2023,
		year_end: 2023,
		github_owner: 'shadyforgeapp',
		github_repo: 'keyzz',
		github_personal_access_token: env.GITHUB_SHADYFOREAPP_PERSONAL_ACCESS_TOKEN
	},
	{
		name: 'palx',
		description: 'color palette generator',
		url: 'https://palx.design',
		logo: '/palx.png',
		model: 'b2c',
		collab: 'Peter',
		year_start: 2024,
		year_end: 2024,
		github_owner: 'shadyforgeapp',
		github_repo: 'palx',
		github_personal_access_token: env.GITHUB_SHADYFOREAPP_PERSONAL_ACCESS_TOKEN
	}
]

const content = [
	{
		name: 'allgasnopickle',
		description: 'daily pickleball streams until 5.0 rating',
		socials: [
			{ name: 'twitch', link: 'https://twitch.tv/allgasnopickle' },
			{ name: 'youtube', link: 'https://youtube.com/@allgasnopickle' }
		],
		year_start: 2023,
		year_end: null,
		preview_file: '/allgasnopickle.png',
		preview_file_landscape_orientation: false,
		preview_file_url:
			'https://www.twitch.tv/allgasnopickle/clip/ClumsySavageTortoiseSoonerLater-WLbY4KkRXpscG8C8'
	},
	{
		name: 'natureuav',
		description: 'beautiful drone videos in nature',
		socials: [
			{ name: 'instagram', link: 'https://instagram.com/natureuav' },
			{ name: 'youtube', link: 'https://youtube.com/@natureuav' },
			{ name: 'tiktok', link: 'https://tiktok.com/@nature_uav' }
		],
		year_start: 2023,
		year_end: null,
		preview_file: '/twentysecs loop.gif',
		preview_file_landscape_orientation: true,
		preview_file_url: 'https://www.youtube.com/watch?v=tYVutRiTiL0'
	},
	{
		name: 'toomanifits',
		description: 'sartorialist',
		socials: [{ name: 'instagram', link: 'https://instagram.com/toomanifits' }],
		year_start: 2022,
		year_end: null,
		preview_file: '/dress.png',
		preview_file_landscape_orientation: false,
		preview_file_url:
			'https://www.instagram.com/p/Cmvj3tzOOja/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='
	}
]

export default async function Home() {
	return (
		<main className='max-w-full items-center px-6 pb-16 font-editorialul'>
			<div className='rounded-b-sm border-b-[1.5px] border-b-stone-400 border-opacity-20 py-4'>
				<h1 className=' text-xl text-stone-600'>shadyforge</h1>
				<h2 className='tracking-tight text-stone-400 '>by mani & friends</h2>
			</div>
			<h2 className='py-4 text-lg'>products</h2>
			<ScrollArea className='whitespace-nowrap'>
				<div className='flex w-max space-x-6'>
					{projects
						.filter((project) => project.year_start > 2023)
						.slice()
						.reverse()
						.map((project) => (
							<div key={project.name}>
								<Link href={project.url}>
									<div className='flex h-52 w-52 items-center justify-center rounded-2xl border-[0.25px] border-stone-400 border-opacity-40 bg-stone-50'>
										<div className='rounded-md'>
											<Image
												className='h-auto w-auto'
												alt={`${project.name} logo`}
												src={project.logo}
												width={96}
												height={24}
												priority
											/>
										</div>
									</div>
								</Link>
								<div className='mr-2 flex items-center justify-between'>
									<p className='py-[6px] pl-[10px] text-xs text-stone-400'>
										{`${project.year_start} ${
											project.collab == ''
												? ''
												: 'with ' + project.collab.toLocaleLowerCase()
										}`}
									</p>
									<HoverCard>
										<HoverCardTrigger>
											<Info className='h-3 w-3 text-stone-400 hover:text-stone-600' />
										</HoverCardTrigger>
										<HoverCardContent className='border-1 z-50 border-stone-400 bg-white p-3 text-sm text-stone-600 shadow-lg'>
											<div className='flex justify-between space-x-4 font-sans'>
												<Avatar className='h-[40px] w-[40px]'>
													<AvatarImage src={project.logo} />
													<AvatarFallback>
														{project.name.substring(0, 2)}
													</AvatarFallback>
												</Avatar>
												<div className='space-y-1'>
													<h4 className='font-semibold'>{project.name}</h4>
													<p className=''>{project.description}</p>
													<div className='flex items-center pt-2'>
														<CalendarDays className='mr-2 h-4 w-4 opacity-70' />{' '}
														<span className='text-xs text-stone-400'>
															started {project.year_start}
														</span>
													</div>
													<div className='flex items-center pt-2'>
														<GitCommit className='mr-2 h-4 w-4 opacity-70' />{' '}
														<span className='text-xs text-stone-400'>
															{getGithubRepoStats(
																project.github_owner,
																project.github_repo,
																project.github_personal_access_token
															)}{' '}
															commits
														</span>
													</div>
												</div>
											</div>
										</HoverCardContent>
									</HoverCard>
								</div>
							</div>
						))}

					<div>
						<Link href={'https://plzreply.com'}>
							<div className='flex h-52 w-52 items-center justify-center rounded-2xl border-[0.25px] border-stone-400 border-opacity-40 bg-stone-50'>
								<div className='rounded-md'>
									<h2 className='glowing-text whitespace-nowrap font-fonty text-3xl text-[#00b0c8]'>
										Plz Reply
									</h2>
								</div>
							</div>
						</Link>
						<div className='mr-2 flex items-center justify-between'>
							<p className='py-[6px] pl-[10px] text-xs text-stone-400'>
								2023 &nbsp;with{' '}
								<Link
									className='underline'
									href={'https://twitter.com/eabnelson'}
								>
									erik
								</Link>
							</p>
							<HoverCard>
								<HoverCardTrigger>
									<Info className='h-3 w-3 text-stone-400 hover:text-stone-600' />
								</HoverCardTrigger>
								<HoverCardContent className='border-1 z-50 border-stone-400 bg-white p-3 text-sm text-stone-600 shadow-lg'>
									<div className='flex justify-between space-x-4 font-sans'>
										<Avatar className='h-[40px] w-[40px]'>
											<AvatarImage src='plz.png' />
											<AvatarFallback>pr</AvatarFallback>
										</Avatar>
										<div className='space-y-1'>
											<h4 className='font-semibold'>plzreply</h4>
											<p className=''>send messages that travel across space</p>
											<div className='flex items-center pt-2'>
												<CalendarDays className='mr-2 h-4 w-4 opacity-70' />{' '}
												<span className='text-xs text-stone-400'>
													started 11/13/2023
												</span>
											</div>
											<div className='flex items-center pt-2'>
												<GitCommit className='mr-2 h-4 w-4 opacity-70' />{' '}
												<span className='text-xs text-stone-400'>
													{getGithubRepoStats(
														'plzreply',
														'plzreply-next',
														env.GITHUB_MKANDAN_PERSONAL_ACCESS_TOKEN
													)}{' '}
													commits
												</span>
											</div>
										</div>
									</div>
								</HoverCardContent>
							</HoverCard>
						</div>
					</div>

					{projects
						.filter((project) => project.year_start <= 2023)
						.slice()
						.reverse()
						.map((project) => (
							<div key={project.name}>
								<Link href={project.url}>
									<div className='flex h-52 w-52 items-center justify-center rounded-2xl border-[0.25px] border-stone-400 border-opacity-40 bg-stone-50'>
										<div className='rounded-md'>
											<Image
												className='h-auto w-auto'
												alt={`${project.name} logo`}
												src={project.logo}
												width={96}
												height={24}
												priority
											/>
										</div>
									</div>
								</Link>
								<div className='mr-2 flex items-center justify-between'>
									<p className='py-[6px] pl-[10px] text-xs text-stone-400'>
										{`${project.year_start} ${
											project.collab == ''
												? ''
												: 'with ' + project.collab.toLocaleLowerCase()
										}`}
									</p>
									<HoverCard>
										<HoverCardTrigger>
											<Info className='h-3 w-3 text-stone-400 hover:text-stone-600' />
										</HoverCardTrigger>
										<HoverCardContent className='border-1 z-50 border-stone-400 bg-white p-3 text-sm text-stone-600 shadow-lg'>
											<div className='flex justify-between space-x-4 font-sans'>
												<Avatar className='h-[40px] w-[40px]'>
													<AvatarImage src={project.logo} />
													<AvatarFallback>
														{project.name.substring(0, 2)}
													</AvatarFallback>
												</Avatar>
												<div className='space-y-1'>
													<h4 className='font-semibold'>{project.name}</h4>
													<p className=''>{project.description}</p>
													<div className='flex items-center pt-2'>
														<CalendarDays className='mr-2 h-4 w-4 opacity-70' />{' '}
														<span className='text-xs text-stone-400'>
															started {project.year_start}
														</span>
													</div>
													<div className='flex items-center pt-2'>
														<GitCommit className='mr-2 h-4 w-4 opacity-70' />{' '}
														<span className='text-xs text-stone-400'>
															{getGithubRepoStats(
																project.github_owner,
																project.github_repo,
																project.github_personal_access_token
															)}{' '}
															commits
														</span>
													</div>
												</div>
											</div>
										</HoverCardContent>
									</HoverCard>
								</div>
							</div>
						))}
				</div>
				<ScrollBar orientation='horizontal' />
			</ScrollArea>

			<h2 className='z-1 pb-4 pt-12 text-lg'>content</h2>
			<ScrollArea className='whitespace-nowrap'>
				<div className='flex w-max space-x-6'>
					{content.map((account) => (
						<div key={account.name}>
							<Link href={account.preview_file_url}>
								<div className='flex h-52 w-52 items-center justify-center rounded-2xl border-[0.25px] border-stone-400 border-opacity-40 bg-stone-50'>
									<div className='rounded-md'>
										<Image
											className={`${
												account.preview_file_landscape_orientation
													? 'w-40'
													: 'w-28'
											} rounded-md`}
											alt={`${account.name} logo`}
											src={account.preview_file}
											width={400}
											height={400}
											priority
										/>
									</div>
								</div>
							</Link>
							<div className='mr-2 flex items-center justify-between'>
								<p className='py-[6px] pl-[10px] text-xs text-stone-400'>
									{account.year_start}
								</p>
							</div>
						</div>
					))}
				</div>
				<ScrollBar orientation='horizontal' />
			</ScrollArea>

			<h2 className='pb-4 pt-12 text-lg'>projects & tools</h2>
			<ScrollArea className='whitespace-nowrap'>
				<div className='flex w-max space-x-6'>
					<div>
						<div className='flex h-52 w-52 items-center justify-center rounded-2xl border-[0.25px] border-stone-400 border-opacity-40 bg-stone-50'>
							<div className='rounded-md'>
								<Link href={'https://github.com/mkandan/gae-pytube'}>
									<h2 className='font-sans text-3xl'>YouCap</h2>
								</Link>
							</div>
						</div>
						<div className='mr-2 flex items-center justify-between'>
							<p className='py-[6px] pl-[12px] text-xs text-stone-400'>2023</p>
						</div>
					</div>
				</div>
				<ScrollBar orientation='horizontal' />
			</ScrollArea>

			<h2 className='py-4 text-lg'>links</h2>
			<div className='tracking-tight text-stone-400'>
				<Link href={'https://twitter.com/man1_kandan'}>twitter</Link>
				<br />
				<Link href={'https://github.com/mkandan'}>github</Link>
				<br />
				<Link href={'mailto:hi@shadyforge.com'}>contact</Link>
			</div>
		</main>
	)
}
