import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import { getFoodBuff } from '@/libs/microcms'
import React from 'react'
import { tv } from 'tailwind-variants'
import { inconsolata } from '../styles/fonts'

const table = tv({
	slots: {
		tableTr: 'odd:bg-slate-100 even:bg-white',
		tableTd: `border text-xl p-4 ${inconsolata.className}`,
	},
})

const { tableTr, tableTd } = table()

export default async function FoodPage() {
	const session = await auth()

	if (!session) {
		redirect('/profile')
	}

	const { contents } = await getFoodBuff()
	const foodStr = contents.filter((food) => food.name[0] === 'STR')
	const foodInt = contents.filter((food) => food.name[0] === 'INT')
	const foodDex = contents.filter((food) => food.name[0] === 'DEX')
	const foodAgi = contents.filter((food) => food.name[0] === 'AGI')

	const foodCritical = contents.filter(
		(food) => food.name[0] === 'クリティカル率',
	)
	const foodMaxMP = contents.filter((food) => food.name[0] === '最大MP')
	const foodMaxHP = contents.filter((food) => food.name[0] === '最大HP')
	const foodAMPR = contents.filter((food) => food.name[0] === '攻撃MP回復')
	const foodWeaponATK = contents.filter((food) => food.name[0] === '武器ATK')
	const foodHit = contents.filter((food) => food.name[0] === '命中')
	const foodHatePlus = contents.filter((food) => food.name[0] === 'ヘイト＋')
	const foodHateMinus = contents.filter((food) => food.name[0] === 'ヘイト－')
	const foodPercentageBarrier = contents.filter(
		(food) => food.name[0] === '割合バリア',
	)
	const foodPhysicalResistance = contents.filter(
		(food) => food.name[0] === '物理耐性',
	)
	const foodMagicResistance = contents.filter(
		(food) => food.name[0] === '魔法耐性',
	)
	const foodAdvangateDark = contents.filter(
		(food) => food.name[0] === '闇属性ダメージ',
	)
	const foodAdvangateEarth = contents.filter(
		(food) => food.name[0] === '地属性ダメージ',
	)
	const foodAdvangateLight = contents.filter(
		(food) => food.name[0] === '光属性ダメージ',
	)
	const foodAdvangateWind = contents.filter(
		(food) => food.name[0] === '風属性ダメージ',
	)
	const foodAdvangateWater = contents.filter(
		(food) => food.name[0] === '水属性ダメージ',
	)
	const foodAdvangateFire = contents.filter(
		(food) => food.name[0] === '火属性ダメージ',
	)
	const foodAdvangateNeutral = contents.filter(
		(food) => food.name[0] === '無属性ダメージ',
	)

	const foodCategories = [
		{ name: 'クリティカル率', data: foodCritical },
		{ name: '最大MP', data: foodMaxMP },
		{ name: '最大HP', data: foodMaxHP },
		{ name: '攻撃MP回復', data: foodAMPR },
		{ name: '武器ATK', data: foodWeaponATK },
		{ name: '命中', data: foodHit },
		{ name: 'ヘイト＋', data: foodHatePlus },
		{ name: 'ヘイト－', data: foodHateMinus },
		{ name: '割合バリア', data: foodPercentageBarrier },
		{ name: '物理耐性', data: foodPhysicalResistance },
		{ name: '魔法耐性', data: foodMagicResistance },
		{ name: 'STR', data: foodStr },
		{ name: 'INT', data: foodInt },
		{ name: 'DEX', data: foodDex },
		{ name: 'AGI', data: foodAgi },
		{ name: '闇属性にダメージ', data: foodAdvangateDark },
		{ name: '地属性にダメージ', data: foodAdvangateEarth },
		{ name: '光属性にダメージ', data: foodAdvangateLight },
		{ name: '風属性にダメージ', data: foodAdvangateWind },
		{ name: '水属性にダメージ', data: foodAdvangateWater },
		{ name: '火属性にダメージ', data: foodAdvangateFire },
		{ name: '無属性にダメージ', data: foodAdvangateNeutral },
	]

	return (
		<div className="max-w-7xl w-full mx-auto pt-16 flex flex-grow flex-col">
			<table className="border-collapse border border-slate-400 mx-2 mt-4 mb-10 lg:hidden">
				<thead>
					<tr className="border">
						<th scope="col" className="border font-medium">
							料理
						</th>
						<th scope="col" className="border font-medium">
							簡易コード
						</th>
						<th scope="col" className="border font-medium">
							Lv
						</th>
					</tr>
				</thead>
				<tbody>
					{foodCategories.map((category) => (
						<React.Fragment key={category.name}>
							{category.data.map((food) => (
								<React.Fragment key={food.id}>
									{food.item.map(
										(item: { address: string; Lv: number }, index: number) => (
											<tr key={item.address} className={tableTr()}>
												{index === 0 && (
													<th
														scope="row"
														className={`border bg-white font-medium ${
															category.name === '闇属性にダメージ'
																? 'text-violet-500'
																: category.name === '地属性にダメージ'
																	? 'text-amber-600'
																	: category.name === '光属性にダメージ'
																		? 'text-yellow-400'
																		: category.name === '風属性にダメージ'
																			? 'text-green-500'
																			: category.name === '水属性にダメージ'
																				? 'text-blue-400'
																				: category.name === '火属性にダメージ'
																					? 'text-red-500'
																					: category.name === '無属性にダメージ'
																						? 'text-gray-600'
																						: ''
														}`}
														rowSpan={food.item.length}
													>
														{category.name}
													</th>
												)}
												<td className={tableTd()}>{item.address}</td>
												<td className={tableTd()}>{item.Lv}</td>
											</tr>
										),
									)}
								</React.Fragment>
							))}
						</React.Fragment>
					))}
				</tbody>
			</table>

			<div className="hidden lg:flex">
				<table className="flex-grow border-collapse border-slate-400 mx-2 mt-4 mb-10">
					<thead>
						<tr className="border">
							<th scope="col" className="border font-medium">
								料理
							</th>
							<th scope="col" className="border font-medium">
								簡易コード
							</th>
							<th scope="col" className="border font-medium">
								Lv
							</th>
						</tr>
					</thead>
					<tbody className="">
						{foodCategories.slice(0, 11).map((category) => (
							<React.Fragment key={category.name}>
								{category.data.map((food) => (
									<React.Fragment key={food.id}>
										{food.item.map(
											(
												item: { address: string; Lv: number },
												index: number,
											) => (
												<tr key={item.address} className={tableTr()}>
													{index === 0 && (
														<th
															scope="row"
															className={`border font-medium bg-white ${
																category.name === '闇属性にダメージ'
																	? 'text-violet-500'
																	: category.name === '地属性にダメージ'
																		? 'text-amber-600'
																		: category.name === '光属性にダメージ'
																			? 'text-yellow-400'
																			: category.name === '風属性にダメージ'
																				? 'text-green-500'
																				: category.name === '水属性にダメージ'
																					? 'text-blue-400'
																					: category.name === '火属性にダメージ'
																						? 'text-red-500'
																						: category.name ===
																								'無属性にダメージ'
																							? 'text-gray-600'
																							: ''
															}`}
															rowSpan={food.item.length}
														>
															{category.name}
														</th>
													)}
													<td className={tableTd()}>{item.address}</td>
													<td className={tableTd()}>{item.Lv}</td>
												</tr>
											),
										)}
									</React.Fragment>
								))}
							</React.Fragment>
						))}
					</tbody>
				</table>
				<table className="flex-grow border-collapse border border-slate-400 mx-2 mt-4 mb-10">
					<thead>
						<tr className="border">
							<th scope="col" className="border font-medium">
								料理
							</th>
							<th scope="col" className="border font-medium">
								簡易コード
							</th>
							<th scope="col" className="border font-medium">
								Lv
							</th>
						</tr>
					</thead>
					<tbody className="">
						{foodCategories.slice(11, 22).map((category) => (
							<React.Fragment key={category.name}>
								{category.data.map((food) => (
									<React.Fragment key={food.id}>
										{food.item.map(
											(
												item: { address: string; Lv: number },
												index: number,
											) => (
												<tr key={item.address} className={tableTr()}>
													{index === 0 && (
														<th
															scope="row"
															className={`border font-medium bg-white ${
																category.name === '闇属性にダメージ'
																	? 'text-violet-500'
																	: category.name === '地属性にダメージ'
																		? 'text-amber-600'
																		: category.name === '光属性にダメージ'
																			? 'text-yellow-400'
																			: category.name === '風属性にダメージ'
																				? 'text-green-500'
																				: category.name === '水属性にダメージ'
																					? 'text-blue-400'
																					: category.name === '火属性にダメージ'
																						? 'text-red-500'
																						: category.name ===
																								'無属性にダメージ'
																							? 'text-gray-600'
																							: ''
															}`}
															rowSpan={food.item.length}
														>
															{category.name}
														</th>
													)}
													<td className={tableTd()}>{item.address}</td>
													<td className={tableTd()}>{item.Lv}</td>
												</tr>
											),
										)}
									</React.Fragment>
								))}
							</React.Fragment>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
