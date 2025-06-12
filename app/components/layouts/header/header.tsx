import MobileMenu from '@/app/components/elements/MobileMenu/MobileMenu'
import Link from 'next/link'

export default async function Header({
	title,
	link,
}: { title: string; link: string }) {
	return (
		<header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b shadow-custom backdrop-blur-[5px]">
			<MobileMenu />
			<div className="-translate-x-1/2 md:-translate-x-0 absolute left-1/2 grow transform font-bold text-base text-blue-500 opacity-90 md:static md:ml-4 lg:text-xl">
				<Link href="/" scroll={false}>
					トーラムいろいろツール
				</Link>
			</div>
			<div className="md:-translate-x-1/2 hidden grow text-center font-bold text-lg text-slate-700 opacity-90 md:absolute md:left-1/2 md:block md:transform lg:text-xl">
				<Link href={link}>{title}</Link>
			</div>
		</header>
	)
}
