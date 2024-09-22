import Link from 'next/link'

export default function Header() {
	return (
		<header className="sticky top-0 flex justify-center border-b bg-slate-500 z-50">
			<div className="flex items-center justify-between w-full h-16 max-w-3xl px-4 mx-auto sm:px-6">
				<div className="text-white font-bold text-2xl opacity-90"><Link href="/monster">トーラムボスモンスター</Link></div>
			</div>
		</header>
	)
}
