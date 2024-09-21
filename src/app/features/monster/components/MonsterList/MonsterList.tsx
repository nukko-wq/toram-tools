import Link from 'next/link'
import { getList } from '@/libs/microcms'
import { Suspense } from 'react'

const MonsterList = async () => {
  const { contents } = await getList()

  return (
    <div>
      {/*
      <div className='w-1/4'>
        <Suspense fallback={<Loading />}>
          <Search />
        </Suspense>
      </div>
      <div className='w-3/4'>
        <Suspense fallback={<Loading />}>
          <Results />
        </Suspense>
      </div>
      */}
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