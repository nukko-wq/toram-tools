import React, { Suspense } from 'react'
import { auth, signOut } from '@/auth'
import { redirect } from 'next/navigation'
import MonsterList from '../features/monster/components/MonsterList/MonsterList'
import Search from '../features/monster/components/Serch/Search'
import Results from '../features/monster/components/Results/Results'
import Spinner from '@/src/app/components/elements/Spinner'
import { cache } from 'react'

type Props = {
	q?: string
}

const fetchSession = cache(async () => {
	return await auth()
})

export default async function MonsterPage({ searchParams = {} }: { searchParams?: Props }) {

	const {
		q = ''
	} = searchParams

	const session = await fetchSession()
	const user = session?.user

	if (!session) {
		redirect('/profile')
	}
	return (
		<div className='max-w-5xl w-full mx-auto p-6 flex-grow '>
			{/*
			<div>{session.user?.name}</div>
			<h1 className="">ようこそ {user?.name}</h1>
			*/}
			<Suspense fallback={<Spinner />}>
				<Search />
			</Suspense>
			<div>
				<Suspense key={q} fallback={<Spinner />}>
					<Results q={q} />
				</Suspense>
			</div>
			{/*
			<MonsterList />
			*/}
		</div>

	)
}
