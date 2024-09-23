import { auth, signIn, signOut } from '@/auth'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import Favicon from '/public/images/Metadata/favicon.ico'
import AppleIcon from '/public/images/Metadata/monster/apple-icon.png'
import AndroidIcon from '/public/images/Metadata/monster/android-touch-icon.png'

export const metadata: Metadata = {
	title: 'トーラムいろいろツール',
	description:
		'トーラムオンラインのいろいろツール。マーケット計算ツールがあります。',
	robots: {
		index: false,
		follow: false,
	},
	icons: [
		{ rel: 'icon', url: Favicon.src },
		{ rel: 'apple-touch-icon', url: AppleIcon.src, sizes: '180x180' },
		{ rel: 'icon', type: 'image/png', url: AndroidIcon.src, sizes: '192x192' },
	]
}

export default async function SignInForm() {
	const session = await auth()
	const user = session?.user

	if (user) {
		redirect('/monster')
	}

	return (
		<div className='flex flex-col justify-center items-center flex-grow'>
			<h1 className='mt-4 text-center text-3xl font-bold text-gray-700'>トーラムいろいろツール</h1>
			<div className='flex flex-col justify-center items-center flex-grow'>
				<form
					action={async () => {
						'use server'
						await signIn('google')
					}}
				>
					<button type="submit" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
						<svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
							<path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd" />
						</svg>
						Sign in with Google
					</button>
				</form>
			</div>
		</div>
	)
}
