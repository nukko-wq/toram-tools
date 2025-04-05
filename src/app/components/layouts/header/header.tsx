import Link from 'next/link'
import MobileMenu from '@/src/app/components/elements/MobileMenu/MobileMenu'

export default async function Header({
	title,
	link,
}: { title: string; link: string }) {
	return (
		<header className="flex items-center justify-between border-b z-50 w-full h-16 fixed top-0 shadow-custom backdrop-blur-[5px]">
			<MobileMenu />
			<div className="flex-grow font-bold text-base lg:text-xl absolute md:static md:ml-4 left-1/2 transform -translate-x-1/2 md:-translate-x-0 opacity-90 text-blue-500">
				<Link href="/" scroll={false}>
					トーラムいろいろツール
				</Link>
			</div>
			<div className="hidden md:block md:absolute md:left-1/2 md:transform md:-translate-x-1/2 font-bold flex-grow text-center text-lg lg:text-xl opacity-90 text-slate-700">
				<Link href={link}>{title}</Link>
			</div>
		</header>
	)
}
