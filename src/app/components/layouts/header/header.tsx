import Link from 'next/link'
import { auth } from '@/auth'
import MobileMenu from '@/src/app/components/elements/MobileMenu/MobileMenu'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import { CaretDownIcon } from '@radix-ui/react-icons'

export default async function Header({ title, link }: { title: string, link: string }) {
	const session = await auth()
	const isLoggedIn = !!session

	return (
		<header className="flex items-center justify-between border-b bg-white z-50 w-full h-16 fixed top-0">
			<MobileMenu isLoggedIn={isLoggedIn} />
			<div className='font-bold text-base lg:text-xl absolute md:static md:ml-4 left-1/2 transform -translate-x-1/2 md:-translate-x-0 opacity-90 text-blue-500'>
				<Link href="/" scroll={false}>トーラムいろいろツール</Link>
			</div>
			<div className="hidden md:block md:absolute md:left-1/2 md:transform md:-translate-x-1/2 font-bold flex-grow text-center text-lg lg:text-xl opacity-90"><Link href={link}>{title}</Link></div>
			{session && (
				<NavigationMenu className='mr-4 hidden md:block'>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuTrigger>
								ツール{' '}
								<CaretDownIcon
									className="relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
									aria-hidden
								/>
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="grid gap-3 p-6 md:w-[250px] lg:w-[250px] lg:grid-cols-1 relative -left-[160px] top-4 shadow rounded-lg bg-white">
									<NavigationMenuLink href="/market" className={`hover:bg-teal-100 hover:text-teal-800 px-6 opacity-80 text-xl font-bold py-6 ${navigationMenuTriggerStyle()}`}>
										マーケット計算
									</NavigationMenuLink>
									<NavigationMenuLink href="/monster" className={`hover:bg-blue-100 hover:text-blue-800 font-bold px-6 opacity-80 text-xl py-6 ${navigationMenuTriggerStyle()}`}>
										モンスター検索
									</NavigationMenuLink>
									<NavigationMenuLink href="/colors" className={`hover:bg-rose-100 hover:text-rose-800 font-bold px-6 opacity-80 text-xl py-6 ${navigationMenuTriggerStyle()}`}>
										染色一覧
									</NavigationMenuLink>
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			)}
		</header >
	)
}
