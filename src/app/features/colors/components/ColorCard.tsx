import { tv } from 'tailwind-variants'

const card = tv({
	slots: {
		cardContainer: 'h-14 flex border-b pb-2',
		cardLeft: 'flex-grow',
		cardRight: 'w-1/6 flex justify-center items-center text-slate-500',
	},
})

const { cardLeft, cardRight, cardContainer } = card()

interface CardProps {
	id: number
	color: string
}

export default function ColorCard({ card }: { card: CardProps }) {
	return (
		<div className={cardContainer()}>
			<div className={cardLeft()} style={{ backgroundColor: card.color }} />
			<div className={cardRight()}>{card.id}</div>
		</div>
	)
}
