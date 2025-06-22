import Link from 'next/link'
import { useMemo } from 'react'
import { v4 as uuidv4 } from 'uuid'

type CardColor = 'teal' | 'blue' | 'purple' | 'green' | 'red' | 'orange'

interface CardProps {
	title: string
	description: string | string[]
	link: string
	color?: CardColor
}

const Card: React.FC<CardProps> = ({
	title,
	description,
	link,
	color = 'teal',
}) => {
	const descriptionWithIds = useMemo(
		() =>
			Array.isArray(description)
				? description.map((line) => ({ id: uuidv4(), text: line }))
				: [{ id: uuidv4(), text: description }],
		[description],
	)

	const colorClasses = {
		teal: 'border-teal-400',
		blue: 'border-blue-400',
		purple: 'border-purple-400',
		green: 'border-green-400',
		red: 'border-red-400',
		orange: 'border-orange-400',
	}

	return (
		<Link href={link} scroll={false} className="outline-blue-500">
			<div className="flex h-full w-full max-w-lg flex-col rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300">
				<h5 className="font-bold text-2xl text-gray-700">{title}</h5>
				<hr className={`my-2 border-2 ${colorClasses[color]}`} />
				<div className="mt-3 flex grow flex-col">
					{Array.isArray(description) ? (
						descriptionWithIds.map(({ id, text }) => (
							<p key={id} className="font-normal text-gray-700">
								{text}
							</p>
						))
					) : (
						<p className="font-normal text-gray-700">{description}</p>
					)}
				</div>
			</div>
		</Link>
	)
}

export default Card
