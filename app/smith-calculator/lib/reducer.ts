import type {
	SmithingInput,
	CharacterStats,
	EquipmentSet,
	FoodBonus,
	Skills,
	EquipmentType,
} from './types'

// Actionの型定義
export type Action =
	| { type: 'SET_INPUT'; payload: SmithingInput }
	| {
			type: 'UPDATE_CHARACTER_STAT'
			payload: { stat: keyof CharacterStats; value: number | undefined }
	  }
	| {
			type: 'UPDATE_EQUIPMENT_STAT'
			payload: {
				slot: keyof EquipmentSet
				stat: string
				value: number | undefined
			}
	  }
	| {
			type: 'UPDATE_FOOD'
			payload: { stat: keyof FoodBonus; value: number | undefined }
	  }
	| { type: 'UPDATE_SKILLS'; payload: Skills }
	| { type: 'UPDATE_SMITH_PROFICIENCY'; payload: number | undefined }
	| { type: 'UPDATE_EQUIPMENT_TYPE'; payload: EquipmentType }
	| { type: 'UPDATE_DIFFICULTY'; payload: number | undefined }
	| { type: 'UPDATE_BASE_POTENTIAL'; payload: number | undefined }

// Reducer関数
export function smithingReducer(
	state: SmithingInput,
	action: Action,
): SmithingInput {
	switch (action.type) {
		case 'SET_INPUT':
			return action.payload

		case 'UPDATE_CHARACTER_STAT': {
			const { stat, value } = action.payload
			return {
				...state,
				characterStats: {
					...state.characterStats,
					[stat]:
						value === undefined ? undefined : Math.max(1, Math.min(999, value)),
				},
			}
		}

		case 'UPDATE_EQUIPMENT_STAT': {
			const { slot, stat, value } = action.payload
			return {
				...state,
				equipment: {
					...state.equipment,
					[slot]: {
						...state.equipment[slot],
						[stat]:
							value === undefined || value === 0
								? undefined
								: Math.max(0, value),
					},
				},
			}
		}

		case 'UPDATE_FOOD': {
			const { stat, value } = action.payload
			return {
				...state,
				food: {
					...state.food,
					[stat]:
						value === undefined || value === 0 ? undefined : Math.max(0, value),
				},
			}
		}

		case 'UPDATE_SKILLS':
			return { ...state, skills: action.payload }

		case 'UPDATE_SMITH_PROFICIENCY':
			return { ...state, smithProficiency: action.payload }

		case 'UPDATE_EQUIPMENT_TYPE':
			return { ...state, equipmentType: action.payload }

		case 'UPDATE_DIFFICULTY':
			return { ...state, difficulty: action.payload }

		case 'UPDATE_BASE_POTENTIAL':
			return { ...state, basePotential: action.payload }

		default:
			return state
	}
}
