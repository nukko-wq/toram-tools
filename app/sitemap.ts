import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://toram-tools.nukko.dev',
		},
		{
			url: 'https://toram-tools.nukko.dev/market',
		},
	]
}
