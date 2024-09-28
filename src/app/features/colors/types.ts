export type CategoryKey =
	| 'all'
	| 'pink'
	| 'red'
	| 'orange'
	| 'yellow'
	| 'green'
	| 'blue'
	| 'purple'
	| 'brown'
	| 'monochrome'

export interface Category {
	name: string
	key: CategoryKey
}

export interface Card {
	id: number
	color: string
	category: CategoryKey[]
}
