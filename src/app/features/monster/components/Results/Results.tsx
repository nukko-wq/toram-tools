import React from 'react'
import getMonsters from '@/src/app/features/monster/api/getMonsters'
import Link from 'next/link'

type Props = {
  q?: string
}

const Results = async ({ q }: Props) => {
  const monsters = await getMonsters({ q })

  return (
    <div className='flex h-full'>
      <section className='p-8'>
        <div className='grid gap-6'>
          <h2 className='text-lg font-bold'>検索結果</h2>
          {monsters.length === 0 ? (
            <p>検索結果がありません</p>
          ) : (
            <ul className='grid gap-3'>
              {monsters.map((monster) => (
                <li key={monster.id} className='grid gap-2 rounded-md border p-4 transition hover:bg-gray-50'>
                  <Link href={`/monster/${monster.id}`}>
                    <p className='font-bold'>{monster.name}</p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  )
}

export default Results