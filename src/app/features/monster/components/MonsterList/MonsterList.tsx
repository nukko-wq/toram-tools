import Link from 'next/link'
import { getList } from '@/libs/microcms'

const MonsterList = async () => {
  const { contents } = await getList()

  return (
    <div className='p-8'>
      <ul>
        {contents.map((monster) => {
          return (
            <li key={monster.id} className='mb-1'>
              <Link href={`/monster/${monster.id}`}>{monster.name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MonsterList