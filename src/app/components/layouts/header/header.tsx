import Link from 'next/link'

export default function Header() {
	return (
		<header className="sticky top-0 flex justify-center border-b bg-slate-600">
			<div className="flex items-center justify-between w-full h-16 max-w-3xl px-4 mx-auto sm:px-6">
				<div className="text-white font-bold text-2xl"><Link href="/monster">トーラムボスモンスター</Link></div>
			</div>
		</header>
	)
}
