import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import { getFoodBuff } from '@/libs/microcms'
import React from 'react'
import { tv } from 'tailwind-variants'

const table = tv({
	slots: {
		tableTr: '',
		tableTd: 'border p-4',
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

	return (
		<div className="max-w-5xl w-full mx-auto pt-16 flex flex-grow flex-col">
			<table className="border-collapse border border-slate-400 mx-2 mt-4 mb-10">
				<thead>
					<tr className="border">
						<th scope="col" className="border">
							料理
						</th>
						<th scope="col" className="border">
							簡易コード
						</th>
						<th scope="col" className="border">
							Lv
						</th>
					</tr>
				</thead>
				<tbody>
					<tr className="">
						<th
							scope="row"
							className="border"
							rowSpan={foodCritical[0].item.length + 1}
						>
							クリティカル率
						</th>
					</tr>
					{foodCritical.map((food) => (
						<React.Fragment key={food.id}>
							{food.item.map(
								(item: { address: string; Lv: number }, index: number) => (
									<tr key={`${food.id}-${index}`} className={tableTr()}>
										<td className={tableTd()}>{item.address}</td>
										<td className={tableTd()}>{item.Lv}</td>
									</tr>
								),
							)}
						</React.Fragment>
					))}
					<tr>
						<th
							scope="row"
							className="border"
							rowSpan={foodMaxMP[0].item.length + 1}
						>
							最大MP
						</th>
					</tr>
					{foodMaxMP.map((food) => (
						<React.Fragment key={food.id}>
							{food.item.map(
								(item: { address: string; Lv: number }, index: number) => (
									<tr key={`${food.id}-${index}`} className={tableTr()}>
										<td className={tableTd()}>{item.address}</td>
										<td className={tableTd()}>{item.Lv}</td>
									</tr>
								),
							)}
						</React.Fragment>
					))}
					<tr>
						<th
							scope="row"
							className="border"
							rowSpan={foodMaxHP[0].item.length + 1}
						>
							最大HP
						</th>
					</tr>
					{foodMaxHP.map((food) => (
						<React.Fragment key={food.id}>
							{food.item.map(
								(item: { address: string; Lv: number }, index: number) => (
									<tr key={`${food.id}-${index}`} className={tableTr()}>
										<td className={tableTd()}>{item.address}</td>
										<td className={tableTd()}>{item.Lv}</td>
									</tr>
								),
							)}
						</React.Fragment>
					))}
					<tr>
						<th
							scope="row"
							className="border"
							rowSpan={foodAMPR[0].item.length + 1}
						>
							攻撃MP回復
						</th>
					</tr>
					{foodAMPR.map((food) => (
						<React.Fragment key={food.id}>
							{food.item.map(
								(item: { address: string; Lv: number }, index: number) => (
									<tr key={`${food.id}-${index}`} className={tableTr()}>
										<td className={tableTd()}>{item.address}</td>
										<td className={tableTd()}>{item.Lv}</td>
									</tr>
								),
							)}
						</React.Fragment>
					))}
					<tr>
						<th
							scope="row"
							className="border"
							rowSpan={foodWeaponATK[0].item.length + 1}
						>
							武器ATK
						</th>
					</tr>
					{foodWeaponATK.map((food) => (
						<React.Fragment key={food.id}>
							{food.item.map(
								(item: { address: string; Lv: number }, index: number) => (
									<tr key={`${food.id}-${index}`} className={tableTr()}>
										<td className={tableTd()}>{item.address}</td>
										<td className={tableTd()}>{item.Lv}</td>
									</tr>
								),
							)}
						</React.Fragment>
					))}
					<tr>
						<th
							scope="row"
							className="border"
							rowSpan={foodHit[0].item.length + 1}
						>
							命中
						</th>
					</tr>
					{foodHit.map((food) => (
						<React.Fragment key={food.id}>
							{food.item.map(
								(item: { address: string; Lv: number }, index: number) => (
									<tr key={`${food.id}-${index}`} className={tableTr()}>
										<td className={tableTd()}>{item.address}</td>
										<td className={tableTd()}>{item.Lv}</td>
									</tr>
								),
							)}
						</React.Fragment>
					))}
					<tr>
						<th
							scope="row"
							className="border"
							rowSpan={foodHatePlus[0].item.length + 1}
						>
							ヘイト＋
						</th>
					</tr>
					{foodHatePlus.map((food) => (
						<React.Fragment key={food.id}>
							{food.item.map(
								(item: { address: string; Lv: number }, index: number) => (
									<tr key={`${food.id}-${index}`} className={tableTr()}>
										<td className={tableTd()}>{item.address}</td>
										<td className={tableTd()}>{item.Lv}</td>
									</tr>
								),
							)}
						</React.Fragment>
					))}
					<tr>
						<th
							scope="row"
							className="border"
							rowSpan={foodHateMinus[0].item.length + 1}
						>
							ヘイト－
						</th>
					</tr>
					{foodHateMinus.map((food) => (
						<React.Fragment key={food.id}>
							{food.item.map(
								(item: { address: string; Lv: number }, index: number) => (
									<tr key={`${food.id}-${index}`} className={tableTr()}>
										<td className={tableTd()}>{item.address}</td>
										<td className={tableTd()}>{item.Lv}</td>
									</tr>
								),
							)}
						</React.Fragment>
					))}
					<tr>
						<th
							scope="row"
							className="border"
							rowSpan={foodPercentageBarrier[0].item.length + 1}
						>
							割合バリア
						</th>
					</tr>
					{foodPercentageBarrier.map((food) => (
						<React.Fragment key={food.id}>
							{food.item.map(
								(item: { address: string; Lv: number }, index: number) => (
									<tr key={`${food.id}-${index}`} className={tableTr()}>
										<td className={tableTd()}>{item.address}</td>
										<td className={tableTd()}>{item.Lv}</td>
									</tr>
								),
							)}
						</React.Fragment>
					))}
					<tr>
						<th
							scope="row"
							className="border"
							rowSpan={foodPhysicalResistance[0].item.length + 1}
						>
							物理耐性
						</th>
					</tr>
					{foodPhysicalResistance.map((food) => (
						<React.Fragment key={food.id}>
							{food.item.map(
								(item: { address: string; Lv: number }, index: number) => (
									<tr key={`${food.id}-${index}`} className={tableTr()}>
										<td className={tableTd()}>{item.address}</td>
										<td className={tableTd()}>{item.Lv}</td>
									</tr>
								),
							)}
						</React.Fragment>
					))}
					<tr>
						<th
							scope="row"
							className="border"
							rowSpan={foodMagicResistance[0].item.length + 1}
						>
							魔法耐性
						</th>
					</tr>
					{foodMagicResistance.map((food) => (
						<React.Fragment key={food.id}>
							{food.item.map(
								(item: { address: string; Lv: number }, index: number) => (
									<tr key={`${food.id}-${index}`} className={tableTr()}>
										<td className={tableTd()}>{item.address}</td>
										<td className={tableTd()}>{item.Lv}</td>
									</tr>
								),
							)}
						</React.Fragment>
					))}
					<tr>
						<th
							scope="row"
							className="border"
							rowSpan={foodStr[0].item.length + 1}
						>
							STR
						</th>
					</tr>
					{foodStr.map((food) => (
						<React.Fragment key={food.id}>
							{food.item.map(
								(item: { address: string; Lv: number }, index: number) => (
									<tr key={`${food.id}-${index}`} className={tableTr()}>
										<td className={tableTd()}>{item.address}</td>
										<td className={tableTd()}>{item.Lv}</td>
									</tr>
								),
							)}
						</React.Fragment>
					))}
					<tr>
						<th
							scope="row"
							className="border"
							rowSpan={foodInt[0].item.length + 1}
						>
							INT
						</th>
					</tr>
					{foodInt.map((food) => (
						<React.Fragment key={food.id}>
							{food.item.map(
								(item: { address: string; Lv: number }, index: number) => (
									<tr key={`${food.id}-${index}`} className={tableTr()}>
										<td className={tableTd()}>{item.address}</td>
										<td className={tableTd()}>{item.Lv}</td>
									</tr>
								),
							)}
						</React.Fragment>
					))}
					<tr>
						<th
							scope="row"
							className="border"
							rowSpan={foodDex[0].item.length + 1}
						>
							DEX
						</th>
					</tr>
					{foodDex.map((food) => (
						<React.Fragment key={food.id}>
							{food.item.map(
								(item: { address: string; Lv: number }, index: number) => (
									<tr key={`${food.id}-${index}`} className={tableTr()}>
										<td className={tableTd()}>{item.address}</td>
										<td className={tableTd()}>{item.Lv}</td>
									</tr>
								),
							)}
						</React.Fragment>
					))}
					<tr>
						<th
							scope="row"
							className="border"
							rowSpan={foodAgi[0].item.length + 1}
						>
							AGI
						</th>
					</tr>
					{foodAgi.map((food) => (
						<React.Fragment key={food.id}>
							{food.item.map(
								(item: { address: string; Lv: number }, index: number) => (
									<tr key={`${food.id}-${index}`} className={tableTr()}>
										<td className={tableTd()}>{item.address}</td>
										<td className={tableTd()}>{item.Lv}</td>
									</tr>
								),
							)}
						</React.Fragment>
					))}
					<tr>
						<th
							scope="row"
							className="border"
							rowSpan={foodAdvangateDark[0].item.length + 1}
						>
							闇属性にダメージ
						</th>
					</tr>
					{foodAdvangateDark.map((food) => (
						<React.Fragment key={food.id}>
							{food.item.map(
								(item: { address: string; Lv: number }, index: number) => (
									<tr key={`${food.id}-${index}`} className={tableTr()}>
										<td className={tableTd()}>{item.address}</td>
										<td className={tableTd()}>{item.Lv}</td>
									</tr>
								),
							)}
						</React.Fragment>
					))}
					<tr>
						<th
							scope="row"
							className="border"
							rowSpan={foodAdvangateEarth[0].item.length + 1}
						>
							地属性にダメージ
						</th>
					</tr>
					{foodAdvangateEarth.map((food) => (
						<React.Fragment key={food.id}>
							{food.item.map(
								(item: { address: string; Lv: number }, index: number) => (
									<tr key={`${food.id}-${index}`} className={tableTr()}>
										<td className={tableTd()}>{item.address}</td>
										<td className={tableTd()}>{item.Lv}</td>
									</tr>
								),
							)}
						</React.Fragment>
					))}
					<tr>
						<th
							scope="row"
							className="border"
							rowSpan={foodAdvangateLight[0].item.length + 1}
						>
							光属性にダメージ
						</th>
					</tr>
					{foodAdvangateLight.map((food) => (
						<React.Fragment key={food.id}>
							{food.item.map(
								(item: { address: string; Lv: number }, index: number) => (
									<tr key={`${food.id}-${index}`} className={tableTr()}>
										<td className={tableTd()}>{item.address}</td>
										<td className={tableTd()}>{item.Lv}</td>
									</tr>
								),
							)}
						</React.Fragment>
					))}
					<tr>
						<th
							scope="row"
							className="border"
							rowSpan={foodAdvangateWind[0].item.length + 1}
						>
							風属性にダメージ
						</th>
					</tr>
					{foodAdvangateWind.map((food) => (
						<React.Fragment key={food.id}>
							{food.item.map(
								(item: { address: string; Lv: number }, index: number) => (
									<tr key={`${food.id}-${index}`} className={tableTr()}>
										<td className={tableTd()}>{item.address}</td>
										<td className={tableTd()}>{item.Lv}</td>
									</tr>
								),
							)}
						</React.Fragment>
					))}
					<tr>
						<th
							scope="row"
							className="border"
							rowSpan={foodAdvangateWater[0].item.length + 1}
						>
							水属性にダメージ
						</th>
					</tr>
					{foodAdvangateWater.map((food) => (
						<React.Fragment key={food.id}>
							{food.item.map(
								(item: { address: string; Lv: number }, index: number) => (
									<tr key={`${food.id}-${index}`} className={tableTr()}>
										<td className={tableTd()}>{item.address}</td>
										<td className={tableTd()}>{item.Lv}</td>
									</tr>
								),
							)}
						</React.Fragment>
					))}
					<tr>
						<th
							scope="row"
							className="border"
							rowSpan={foodAdvangateFire[0].item.length + 1}
						>
							火属性にダメージ
						</th>
					</tr>
					{foodAdvangateFire.map((food) => (
						<React.Fragment key={food.id}>
							{food.item.map(
								(item: { address: string; Lv: number }, index: number) => (
									<tr key={`${food.id}-${index}`} className={tableTr()}>
										<td className={tableTd()}>{item.address}</td>
										<td className={tableTd()}>{item.Lv}</td>
									</tr>
								),
							)}
						</React.Fragment>
					))}
					<tr>
						<th
							scope="row"
							className="border"
							rowSpan={foodAdvangateNeutral[0].item.length + 1}
						>
							水属性にダメージ
						</th>
					</tr>
					{foodAdvangateNeutral.map((food) => (
						<React.Fragment key={food.id}>
							{food.item.map(
								(item: { address: string; Lv: number }, index: number) => (
									<tr key={`${food.id}-${index}`} className={tableTr()}>
										<td className={tableTd()}>{item.address}</td>
										<td className={tableTd()}>{item.Lv}</td>
									</tr>
								),
							)}
						</React.Fragment>
					))}
				</tbody>
			</table>
		</div>
	)
}
