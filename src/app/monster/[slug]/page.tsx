import { getDetail } from '@/libs/microcms'
import { v4 as uuidv4 } from 'uuid'
import { cache } from 'react'

const fetchMonsterDetail = cache(async (slug: string) => {
  return await getDetail(slug)
})

/*モンスターの詳細を表示*/
export default async function MonsterDetail({ params }: { params: { slug: string } }) {
  const monster = await fetchMonsterDetail(params.slug)

  // ドロップアイテムの配列を作成
  const dropItems = Array.from({ length: 12 }, (_, i) => {
    const item = monster[`drop${i + 1}` as keyof typeof monster]
    return item ? { id: uuidv4(), content: item } : null
  }).filter(Boolean)

  return (
    <div>
      <div className='boss-data w-full max-w-5xl mx-auto pt-6 flex-grow'>
        <div className='prose p-6'>
          <h1 className="text-center opacity-80">{monster.name}</h1>
          <p className='mt-12'>場所: {monster.area}</p>
          <p className=''>Lv: {monster.Lv}</p>
          <p className=''>属性: {monster.Element}</p>
          {/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
          <div className="" dangerouslySetInnerHTML={{ __html: `${monster.body}` }} />
          <h4 className='mt-8 opacity-80'>ドロップアイテム</h4>
          {dropItems.map((item) => (
            <div key={item?.id}>
              {item?.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}