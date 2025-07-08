'use client'

import { useEffect, useState, useReducer, useMemo, useCallback } from 'react'
import { calculateSmithing } from '../lib/calculations'
import { loadCurrentData, saveCurrentData } from '../lib/localStorage'
import type { EquipmentType, SmithingInput, Skills } from '../lib/types'
import { useMediaQuery } from '../hooks/useMediaQuery'
import CharacterStatsSection from './CharacterStatsSection'
import CraftingTargetSection from './CraftingTargetSection'
import EquipmentSection from './EquipmentSection'
import FoodSection from './FoodSection'
import MobileResultBar from './MobileResultBar'
import ResultsSection from './ResultsSection'
import SkillsSection from './SkillsSection'
import { smithingReducer } from '../lib/reducer'

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
	const [input, dispatch] = useReducer(smithingReducer, defaultInput)
	const [isLoaded, setIsLoaded] = useState(false)

	const isMobile = useMediaQuery('(max-width: 767px)')

	const result = useMemo(() => calculateSmithing(input), [input])

	const updateCharacterStat = useCallback(
		(stat: keyof typeof input.characterStats, value: number | undefined) => {
			dispatch({ type: 'UPDATE_CHARACTER_STAT', payload: { stat, value } })
		},
		[],
	)

	const updateEquipmentStat = useCallback(
		(
			slot: keyof typeof input.equipment,
			stat: string,
			value: number | undefined,
		) => {
			dispatch({
				type: 'UPDATE_EQUIPMENT_STAT',
				payload: { slot, stat, value },
			})
		},
		[],
	)

	const updateFood = useCallback(
		(stat: keyof typeof input.food, value: number | undefined) => {
			dispatch({ type: 'UPDATE_FOOD', payload: { stat, value } })
		},
		[],
	)

	const updateSkills = useCallback((skills: Skills) => {
		dispatch({ type: 'UPDATE_SKILLS', payload: skills })
	}, [])

	const updateSmithProficiency = useCallback((value: number | undefined) => {
		dispatch({ type: 'UPDATE_SMITH_PROFICIENCY', payload: value })
	}, [])

	const updateEquipmentType = useCallback((equipmentType: EquipmentType) => {
		dispatch({ type: 'UPDATE_EQUIPMENT_TYPE', payload: equipmentType })
	}, [])

	const updateDifficulty = useCallback((value: number | undefined) => {
		dispatch({ type: 'UPDATE_DIFFICULTY', payload: value })
	}, [])

	const updateBasePotential = useCallback((value: number | undefined) => {
		dispatch({ type: 'UPDATE_BASE_POTENTIAL', payload: value })
	}, [])

	useEffect(() => {
		const savedData = loadCurrentData()
		if (savedData) {
			dispatch({ type: 'SET_INPUT', payload: savedData })
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

				<div className="gap-6 xl:gap-5 lg:col-span-2 xl:col-span-1 flex flex-col">
					<EquipmentSection
						equipment={input.equipment}
						onEquipmentChange={updateEquipmentStat}
					/>
					<ResultsSection result={result} />
				</div>
			</div>

			<MobileResultBar result={result} />
		</div>
	)
}
