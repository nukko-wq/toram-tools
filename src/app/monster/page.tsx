import React, { Suspense } from 'react'
import { auth, signOut } from '@/auth'
import { redirect } from 'next/navigation'
import MonsterList from '../features/monster/components/MonsterList/MonsterList'
import Search from '../features/monster/components/Serch/Search'
import Results from '../features/monster/components/Results/Results'
import Spinner from '@/src/app/components/elements/Spinner'

type Props = {
	q?: string
}

export default async function MonsterPage({ searchParams = {} }: { searchParams?: Props }) {

	const {
		q = ''
	} = searchParams

	const session = await auth()
	const user = session?.user

	if (!session) {
		redirect('/profile')
	}
	return (
		<div className='max-w-5xl w-full mx-auto p-6 flex-grow bg-slate-200'>
			<div>{session.user?.name}</div>
			<h1 className="text-2xl">ようこそ {user?.name}</h1>
			<form className='mb-1'
				action={async () => {
					'use server'
					await signOut()
				}}
			>
				<button type="submit" className="p-2 border-2 bg-blue-400">
					Sign Out
				</button>
			</form>
			<Suspense fallback={<Spinner />}>
				<Search />
			</Suspense>
			<div>
				<Suspense key={q} fallback={<Spinner />}>
					<Results
						q={q}
					/>
				</Suspense>
			</div>
			<MonsterList />
		</div>

	)
}
