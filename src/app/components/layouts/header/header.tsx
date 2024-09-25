import Link from 'next/link'
import { auth, signOut } from '@/auth'
import { redirect } from 'next/navigation'
import MobileMenu from '@/src/app/components/elements/MobileMenu'

export default async function Header({ title, link }: { title: string, link: string }) {
	const session = await auth()
	const isLoggedIn = !!session

	return (
		<header className="top-0 flex items-center justify-between border-b bg-white z-50 w-full h-16 relative">
			<MobileMenu isLoggedIn={isLoggedIn} />
			<div className='hidden fixed top-0 left-0 w-full h-full bg-black opacity-80 z-20 cursor-pointer' />
			<div className='font-bold text-base lg:text-xl absolute md:static md:ml-4 left-1/2 transform -translate-x-1/2 md:-translate-x-0 opacity-90 text-blue-500'>
				<Link href="/">トーラムいろいろツール</Link>
			</div>
			<div className="hidden md:block md:absolute md:left-1/2 md:transform md:-translate-x-1/2 font-bold flex-grow text-center text-lg lg:text-xl opacity-90"><Link href={link}>{title}</Link></div>
			{session && (
				<form className='flex items-center flex-grow justify-end mr-4'
					action={async () => {
						'use server'
						await signOut()
					}}
				>
					<button type="submit" className="py-1.5 px-3 bg-pink-500 hover:bg-pink-600 focus:bg-pink-600 focus:shadow-none active:bg-pink-600 active:shadow-none text-white font-bold rounded border border-transparent text-xs md:text-sm transition-all shadow-md hover:shadow-lg">
						Sign Out
					</button>
				</form>
			)}
		</header>
	)
}
