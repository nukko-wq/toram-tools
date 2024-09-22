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
	drop1: string
	drop2: string
	drop3: string
	drop4: string
	drop5: string
	drop6: string
	drop7: string
	drop8: string
	drop9: string
	drop10: string
	drop11: string
	drop12: string
} & MicroCMSDate

export type Queries = {
	q?: string
}
