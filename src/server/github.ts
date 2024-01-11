
interface Contributor {
	total: number
	weeks: [
		{
			w: string
			a: number
			d: number
			c: number
		}
	]
	author: {
		login: string
		id: number
		node_id: string
		avatar_url: string
		gravatar_id: string
		url: string
		html_url: string
		followers_url: string
		following_url: string
		gists_url: string
		starred_url: string
		subscriptions_url: string
		organizations_url: string
		repos_url: string
		events_url: string
		received_events_url: string
		type: string
		site_admin: boolean
	}
}

export async function getGithubRepoStats(
	GithubOwner: string,
	GithubRepo: string,
	GithubPersonalAccessToken: string
) {
	const response = await fetch(
		`https://api.github.com/repos/${GithubOwner}/${GithubRepo}/stats/contributors`,
		{
			headers: {
				Authorization: `Bearer ${GithubPersonalAccessToken}`,
				Accept: 'application/vnd.github.v3+json'
			}
		}
	)

	if (response.ok) {
		const repostats: Contributor[] = (await response.json()) as Contributor[]
		const targetLogin = 'mkandan'

		const targetAuthor = repostats.find(
			(item) => item.author.login === targetLogin
		)

		if (targetAuthor) {
			const totalCommits = targetAuthor.total
			return totalCommits
		} else {
			return 0
		}
	}
}
