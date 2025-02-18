import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'
import { useMemo } from 'react'

interface CardProps {
	title: string
	description: string | string[]
	link: string
}

const Card: React.FC<CardProps> = ({ title, description, link }) => {
	const descriptionWithIds = useMemo(
		() =>
			Array.isArray(description)
				? description.map((line) => ({ id: uuidv4(), text: line }))
				: [{ id: uuidv4(), text: description }],
		[description],
	)

	return (
		<Link href={link} scroll={false}>
			<div className="flex flex-col max-w-lg p-6 border border-gray-200 rounded-lg w-full h-full">
				<h5 className="text-2xl font-bold text-gray-700">{title}</h5>
				<hr className="my-2 border-teal-400 border-2" />
				<div className="flex flex-col flex-grow mt-3">
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
