import Link from 'next/link'

interface CardProps {
  title: string
  description: string
  link: string
}

const Card: React.FC<CardProps> = ({ title, description, link }) => {
  return (
    <div className="flex flex-col max-w-lg p-6 border border-gray-200 rounded-lg shadow">
      <Link href={link} scroll={false}>
        <h5 className="text-2xl font-bold text-gray-700">{title}</h5>
      </Link>
      <div className='flex flex-col flex-grow'>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
        <p className="mb-3 font-normal text-gray-700" dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <Link
        href={link}
        className="inline-flex w-32 items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-500 rounded-lg hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
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