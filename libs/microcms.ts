import { createClient } from 'microcms-js-sdk'
import type { MicroCMSQueries, MicroCMSDate } from 'microcms-js-sdk'
import { notFound } from 'next/navigation'

export type Monster = {
	id: string
	createdAt: string
	updatedAt: string
	name: string
	area: string
	Lv: number
	Element: string[]
	DEF: number
	MDEF: number
	body: string
	item: string
	category: string[]
} & MicroCMSDate

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
	throw new Error('MICROCMS_SERVICE_DOMAIN is required')
}

if (!process.env.MICROCMS_API_KEY) {
	throw new Error('MICROCMS_API_KEY is required')
}

// API取得用のクライアントを作成
export const client = createClient({
	serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
	apiKey: process.env.MICROCMS_API_KEY,
})

// モンスター一覧を取得
export const getList = async (queries?: MicroCMSQueries) => {
	const listData = await client
		.getList<Monster>({
			endpoint: 'monster',
			queries,
		})
		.catch(notFound)

	return listData
}

// モンスターの詳細を取得
export const getDetail = async (
	contentId: string,
	queries?: MicroCMSQueries,
) => {
	const detailData = await client
		.getListDetail<Monster>({
			endpoint: 'monster',
			contentId,
			queries,
		})
		.catch(notFound)

	return detailData
}
