import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'トーラムいろいろツール',
		description: 'トーラムのいろいろなツール',
		icons: [
			{
				src: '/android-touch-icon.png',
				type: 'image/png',
				sizes: '192x192',
			},
			{
				src: '/android-touch-icon-512.png',
				type: 'image/png',
				sizes: '512x512',
			},
		],
	}
}
