'use client'

import { useState } from 'react'
import CategoryButton from './CategoryButton'
import type { Category, Card, CategoryKey } from '../types'
import ColorCard from './ColorCard'

interface ColorSelectorProps {
	categories: Category[]
	cards: Card[]
}

export default function ColorSelector({
	categories,
	cards,
}: ColorSelectorProps) {
	const [selectedCategory, setSelectedCategory] = useState('all')

	const filteredCards = cards.filter(
		(card) =>
			selectedCategory === 'all' ||
			card.category.includes(selectedCategory as CategoryKey),
	)

	return (
		<>
			<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:max-w-3xl gap-1.5 mb-4 mx-auto">
				{categories.map((category) => (
					<CategoryButton
						key={category.key}
						category={category}
						isSelected={selectedCategory === category.key}
						onClick={() => setSelectedCategory(category.key)}
					/>
				))}
			</div>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
				{filteredCards.map((card) => (
					<ColorCard key={card.id} card={card} />
				))}
			</div>
		</>
	)
}
