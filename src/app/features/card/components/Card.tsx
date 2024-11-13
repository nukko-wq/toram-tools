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
		<div className="flex flex-col max-w-lg p-6 border border-gray-200 rounded-lg">
			<Link href={link} scroll={false}>
				<h5 className="text-2xl font-bold text-gray-700 mb-2">{title}</h5>
			</Link>
			<div className="flex flex-col flex-grow">
				{Array.isArray(description) ? (
					descriptionWithIds.map(({ id, text }) => (
						<p key={id} className="mb-2 font-normal text-gray-700">
							{text}
						</p>
					))
				) : (
					<p className="mb-3 font-normal text-gray-700">{description}</p>
				)}
			</div>
			<Link
				href={link}
				className="inline-flex w-32 items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-500 rounded-lg hover:bg-teal-600"
				scroll={false}
			>
				Learn more
				<svg
					className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 14 10"
				>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M1 5h12m0 0L9 1m4 4L9 9"
					/>
				</svg>
			</Link>
		</div>
	)
}

export default Card
