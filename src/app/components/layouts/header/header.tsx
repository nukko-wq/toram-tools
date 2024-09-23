import Link from 'next/link'
import { auth, signOut } from '@/auth'
import { redirect } from 'next/navigation'

export default async function Header() {
	const session = await auth()

	if (!session) {
		redirect('/profile')
	}

	return (
		<header className="sticky top-0 flex justify-center border-b bg-slate-500 z-50">
			<div className="flex items-center justify-center w-full h-16 max-w-3xl px-4 mx-auto sm:px-6">
				<div className="text-white font-bold text-xl md:text-2xl opacity-90"><Link href="/monster">トーラムボスモンスター</Link></div>
			</div>
			{session && (
				<form className='my-auto mr-3'
					action={async () => {
						'use server'
						await signOut()
					}}
				>
					<button type="submit" className="py-1.5 px-3 bg-slate-600 hover:bg-slate-700 focus:bg-slate-700 focus:shadow-none active:bg-slate-700 active:shadow-none text-white font-bold rounded border border-transparent text-xs md:text-sm transition-all shadow-md hover:shadow-lg">
						Sign Out
					</button>
				</form>
			)}
		</header>
	)
}
