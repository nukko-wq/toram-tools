import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import ColorSelector from '../features/colors/components/ColorSelector'
import { colorCards, colorCategories } from '../features/colors/ColorData'

export default async function ColorsPage() {
	const session = await auth()

	if (!session) {
		redirect('/profile')
	}
	return (
		<div className="w-full mx-auto px-2 pb-4 flex-grow pt-20 bg-[#fcfcfc">
			<ColorSelector categories={colorCategories} cards={colorCards} />
		</div>
	)
}
