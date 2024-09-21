import type { MicroCMSDate } from 'microcms-js-sdk'

export type Monsters = {
	id: string
	createdAt: string
	updatedAt: string
	name: string
	area: string
	Lv: number
	Element: string[]
	DEF: number
	MDEF: number
	body: string
	item: string
	category: string[]
} & MicroCMSDate

export type Queries = {
	q?: string
}
