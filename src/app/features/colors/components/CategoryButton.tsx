import { tv } from 'tailwind-variants'
import type { CategoryKey } from '../types'

const categoryButton = tv({
	base: 'px-3 py-1 rounded transition-colors duration-250',
	variants: {
		category: {
			all: 'bg-gray-200 hover:bg-gray-300',
			pink: 'bg-pink-200 hover:bg-pink-300 text-pink-800',
			red: 'bg-red-200 hover:bg-red-300 text-red-800',
			orange: 'bg-orange-200 hover:bg-orange-300 text-orange-800',
			yellow: 'bg-yellow-200 hover:bg-yellow-300 text-yellow-800',
			green: 'bg-green-200 hover:bg-green-300 text-green-800',
			blue: 'bg-blue-200 hover:bg-blue-300 text-blue-800',
			purple: 'bg-purple-200 hover:bg-purple-300 text-purple-800',
			brown: 'bg-amber-600 hover:bg-amber-700 text-amber-950',
			monochrome: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
		},
		isSelected: {
			true: 'font-bold',
		},
	},
	compoundVariants: [
		{
			category: 'all',
			isSelected: true,
			class: 'bg-gray-500 text-white hover:bg-gray-600',
		},
		{
			category: [
				'pink',
				'red',
				'orange',
				'yellow',
				'green',
				'blue',
				'purple',
				'brown',
				'monochrome',
			],
			isSelected: true,
			class: 'bg-opacity-100 text-white',
		},
	],
})

interface CategoryButtonProps {
	category: {
		name: string
		key: CategoryKey
	}
	isSelected: boolean
	onClick: () => void
}

export default function CategoryButton({
	category,
	isSelected,
	onClick,
}: CategoryButtonProps) {
	return (
		// biome-ignore lint/a11y/useButtonType: <explanation>
		<button
			onClick={onClick}
			className={categoryButton({
				category: category.key,
				isSelected,
			})}
		>
			{category.name}
		</button>
	)
}
