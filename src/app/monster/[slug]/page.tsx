import { getDetail } from '@/libs/microcms'

/*モンスターの詳細を表示*/
export default async function MonsterDetail({ params }: { params: { slug: string } }) {
  const monster = await getDetail(params.slug)

  return (
    <div className='w-full max-w-5xl mx-auto pt-6 bg-slate-200 flex-grow'>
      <div className='p-6'>
        <h1 className="text-3xl font-bold text-center">{monster.name}</h1>
        <p className='text-lg mt-6'>場所: {monster.area}</p>
        <p className='text-lg mt-3'>Lv: {monster.Lv}</p>
        <p className='text-lg mt-3'>属性: {monster.Element}</p>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
        <div className="text-lg mt-3" dangerouslySetInnerHTML={{ __html: `${monster.body}` }} />
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
        <div className='text-lg mt-10' dangerouslySetInnerHTML={{ __html: `${monster.item}` }} />
      </div>
    </div>
  )
}