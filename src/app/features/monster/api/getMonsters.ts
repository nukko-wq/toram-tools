import { client } from '@/libs/microcms'
import type { Queries } from '../types'
import type { Monsters } from '../types'
import { cache } from 'react'

const getMonsters = cache(async ({ q }: Queries) => {
	return await client.getAllContents<Monsters>({
		endpoint: 'monster',
		queries: { q },
	})
})

export default getMonsters
