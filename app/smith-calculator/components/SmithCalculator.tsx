'use client'

import { useEffect, useState } from 'react'
import { calculateSmithing } from '../lib/calculations'
import { loadCurrentData, saveCurrentData } from '../lib/localStorage'
import type { EquipmentType, SmithingInput } from '../lib/types'
import { useMediaQuery } from '../hooks/useMediaQuery'
import CharacterStatsSection from './CharacterStatsSection'
import CraftingTargetSection from './CraftingTargetSection'
import EquipmentSection from './EquipmentSection'
import FoodSection from './FoodSection'
import MobileResultBar from './MobileResultBar'
import ResultsSection from './ResultsSection'
import SkillsSection from './SkillsSection'

const defaultInput: SmithingInput = {
	characterStats: {
		str: 1,
		dex: 1,
		vit: 1,
		agi: 1,
		int: 1,
		tec: 1,
	},
	equipment: {
		main: {
			dex: undefined,
			dexPercent: undefined,
			str: undefined,
			strPercent: undefined,
		},
		sub: {
			dex: undefined,
			dexPercent: undefined,
			str: undefined,
			strPercent: undefined,
		},
		body: {
			dex: undefined,
			dexPercent: undefined,
			str: undefined,
			strPercent: undefined,
		},
		additional: {
			dex: undefined,
			dexPercent: undefined,
			str: undefined,
			strPercent: undefined,
		},
		special: {
			dex: undefined,
			dexPercent: undefined,
			str: undefined,
			strPercent: undefined,
		},
		fashion: {
			dex: undefined,
			dexPercent: undefined,
			str: undefined,
			strPercent: undefined,
		},
	},
	food: {
		str: undefined,
		dex: undefined,
	},
	skills: {
		equipmentCrafting: 10,
		carefulCrafting: 10,
		masterCrafting: 10,
	},
	smithProficiency: undefined,
	equipmentType: '片手剣',
	difficulty: undefined,
	basePotential: undefined,
}

export default function SmithCalculator() {
	const [input, setInput] = useState<SmithingInput>(defaultInput)
	const [isLoaded, setIsLoaded] = useState(false)

	// useMediaQueryを使用してパフォーマンスを最適化
	const isMobile = useMediaQuery('(max-width: 767px)')

	const result = calculateSmithing(input)

	const updateCharacterStat = (
		stat: keyof typeof input.characterStats,
		value: number | undefined,
	) => {
		setInput((prev) => ({
			...prev,
			characterStats: {
				...prev.characterStats,
				[stat]:
					value === undefined ? undefined : Math.max(1, Math.min(999, value)),
			},
		}))
	}

	const updateEquipmentStat = (
		slot: keyof typeof input.equipment,
		stat: string,
		value: number | undefined,
	) => {
		setInput((prev) => ({
			...prev,
			equipment: {
				...prev.equipment,
				[slot]: {
					...prev.equipment[slot],
					[stat]:
						value === undefined || value === 0 ? undefined : Math.max(0, value),
				},
			},
		}))
	}

	const updateFood = (
		stat: keyof typeof input.food,
		value: number | undefined,
	) => {
		setInput((prev) => ({
			...prev,
			food: {
				...prev.food,
				[stat]:
					value === undefined || value === 0 ? undefined : Math.max(0, value),
			},
		}))
	}

	const updateSkills = (skills: typeof input.skills) => {
		setInput((prev) => ({
			...prev,
			skills,
		}))
	}

	const updateSmithProficiency = (value: number | undefined) => {
		setInput((prev) => ({
			...prev,
			smithProficiency: value,
		}))
	}

	const updateEquipmentType = (equipmentType: EquipmentType) => {
		setInput((prev) => ({
			...prev,
			equipmentType,
		}))
	}

	const updateDifficulty = (value: number | undefined) => {
		setInput((prev) => ({
			...prev,
			difficulty: value,
		}))
	}

	const updateBasePotential = (value: number | undefined) => {
		setInput((prev) => ({
			...prev,
			basePotential: value,
		}))
	}

	useEffect(() => {
		const savedData = loadCurrentData()
		if (savedData) {
			setInput(savedData)
		}
		setIsLoaded(true)
	}, [])

	useEffect(() => {
		if (isLoaded) {
			saveCurrentData(input)
		}
	}, [input, isLoaded])

	if (!isLoaded) {
		return (
			<div className="flex justify-center items-center min-h-screen">
				Loading...
			</div>
		)
	}

	return (
		<div className="max-w-7xl mx-auto p-4 lg:p-6 pb-20 md:pb-6 space-y-6 lg:space-y-8 lg:mt-6">
			<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[1fr_2fr] xl:gap-8 gap-4 md:gap-6 lg:gap-0 lg:space-y-6">
				{/* 左カラム: キャラクター */}
				<div className="gap-4 md:gap-6 lg:col-span-3 xl:col-span-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1">
					<CharacterStatsSection
						characterStats={input.characterStats}
						onStatsChange={updateCharacterStat}
						isMobile={isMobile}
					/>

					<SkillsSection
						skills={input.skills}
						smithProficiency={input.smithProficiency}
						onSkillsChange={updateSkills}
						onSmithProficiencyChange={updateSmithProficiency}
					/>

					<FoodSection food={input.food} onFoodChange={updateFood} />

					<CraftingTargetSection
						equipmentType={input.equipmentType}
						difficulty={input.difficulty}
						basePotential={input.basePotential}
						onEquipmentTypeChange={updateEquipmentType}
						onDifficultyChange={updateDifficulty}
						onBasePotentialChange={updateBasePotential}
					/>
				</div>

				{/* 中央カラム: 装備品プロパティ/計算結果 */}
				<div className="gap-6 xl:gap-5 lg:col-span-2 xl:col-span-1 flex flex-col">
					<EquipmentSection
						equipment={input.equipment}
						onEquipmentChange={updateEquipmentStat}
					/>
					<ResultsSection result={result} />
				</div>
			</div>

			{/* モバイル用固定結果バー */}
			<MobileResultBar result={result} />
		</div>
	)
}
