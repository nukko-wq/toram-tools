import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import { getFoodBuff } from '@/libs/microcms'

export default async function FoodPage() {
	const session = await auth()

	if (!session) {
		redirect('/profile')
	}

	const { contents } = await getFoodBuff()
	console.log('🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 ~ FoodPage ~ contents:', contents)
	return (
		<div className="max-w-5xl w-full mx-auto pt-16 flex flex-grow flex-col">
			<ul className="mt-8">
				{contents.map((food) => (
					<li key={food.id} className="mb-4">
						<h2 className="text-xl font-bold">{food.name[0]}</h2>
						<ul className="ml-4">
							{food.item.map((item: { Lv: number; address: string }) => (
								<li key={`${item.Lv}-${item.address}`}>
									Lv: {item.Lv}, 簡易コード: {item.address}
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</div>
	)
}
