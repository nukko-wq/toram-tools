import { getDetail } from '@/libs/microcms'
import parse from 'html-react-parser'
import { v4 as uuidv4 } from 'uuid'
import { notFound } from 'next/navigation'

export const revalidate = 60

/*モンスターの詳細を表示*/
export default async function MonsterDetail(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    try {
		const monster = await getDetail(params.slug)
		if (!monster) {
			notFound()
		}
		// ドロップアイテムの配列を作成
		const dropItems = Array.from({ length: 12 }, (_, i) => {
			const item = monster[`drop${i + 1}` as keyof typeof monster]
			return item ? { id: uuidv4(), content: item } : null
		}).filter(Boolean)

		return (
			<div>
				<div className="boss-data w-full max-w-5xl mx-auto flex-grow pt-16 md:pt-20">
					<div className="prose p-6">
						<h1 className="text-center opacity-80">{monster.name}</h1>
						<p className="mt-12">場所：{monster.area}</p>
						<p className="">Lv：{monster.Lv}</p>
						<p className="">
							属性：
							<span
								className={`
              ${monster.Element.includes('火') && 'text-red-500'}
              ${monster.Element.includes('水') && 'text-blue-500'}
              ${monster.Element.includes('風') && 'text-green-500'}
              ${monster.Element.includes('地') && 'text-yellow-800'}
              ${monster.Element.includes('光') && 'text-yellow-500'}
              ${monster.Element.includes('闇') && 'text-purple-500'}
              ${monster.Element.includes('無') && 'text-gray-500'}
              `}
							>
								{monster.Element}
							</span>
						</p>
						<div className="">{parse(monster.body)}</div>
						<h4 className="mt-8 opacity-80">ドロップアイテム</h4>
						{dropItems.map((item) => (
							<div key={item?.id}>{item?.content}</div>
						))}
					</div>
				</div>
			</div>
		)
	} catch (error) {
		console.error('モンスター情報の取得に失敗しました:', error)
		throw new Error('モンスター情報の取得に失敗しました')
	}
}
