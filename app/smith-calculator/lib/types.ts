export type EquipmentType = 
  | '片手剣'
  | '両手剣'
  | '弓'
  | '自動弓'
  | '杖'
  | '魔道具'
  | '手甲'
  | '旋風槍'
  | '抜刀剣'
  | '体防具';

export interface CharacterStats {
  str: number | undefined;
  dex: number | undefined;
  vit: number | undefined;
  agi: number | undefined;
  int: number | undefined;
  tec: number | undefined;
}

export interface EquipmentStats {
  dex: number | undefined;
  dexPercent: number | undefined;
  str: number | undefined;
  strPercent: number | undefined;
}

export interface EquipmentSet {
  main: EquipmentStats;
  sub: EquipmentStats;
  body: EquipmentStats;
  additional: EquipmentStats;
  special: EquipmentStats;
  fashion: EquipmentStats;
}

export interface FoodBonus {
  str: number | undefined;
  dex: number | undefined;
}

export interface Skills {
  equipmentCrafting: number;
  carefulCrafting: number;
  masterCrafting: number;
}

export interface SmithingInput {
  characterStats: CharacterStats;
  equipment: EquipmentSet;
  food: FoodBonus;
  skills: Skills;
  smithProficiency: number | undefined;
  equipmentType: EquipmentType;
  difficulty: number | undefined;
  basePotential: number | undefined;
}

export interface SmithingResult {
  successRate: number;
  potentialIncrease: number;
  finalPotential: number;
  totalStr: number;
  totalDex: number;
}