import Link from 'next/link'
import { useMemo } from 'react'
import { v4 as uuidv4 } from 'uuid'

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
			<div className="flex h-full w-full max-w-lg flex-col rounded-lg border border-gray-200 p-6">
				<h5 className="font-bold text-2xl text-gray-700">{title}</h5>
				<hr className="my-2 border-2 border-teal-400" />
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
