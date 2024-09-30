import {
	createClient,
	type MicroCMSQueries,
	type MicroCMSDate,
	type MicroCMSContentId,
} from 'microcms-js-sdk'
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
	drop1: string
	drop2: string
	drop3: string
	drop4: string
	drop5: string
	drop6: string
	drop7: string
	drop8: string
	drop9: string
	drop10: string
	drop11: string
	drop12: string
} & MicroCMSDate

export type FoodItem = {
	fieldId: string
	Lv: number
	address: number
}

export type FoodBuff = {
	name: string[]
	item: FoodItem[]
} & MicroCMSContentId &
	MicroCMSDate

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

// 料理情報を取得
export const getFoodBuff = async (queries?: MicroCMSQueries) => {
	const foodBuff = await client.getList({
		endpoint: 'food',
		queries,
	})

	return foodBuff
}
