import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://toram-tools.vercel.app',
		},
		{
			url: 'https://toram-tools.vercel.app/market',
		},
	]
}
