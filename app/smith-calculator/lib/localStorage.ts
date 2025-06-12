import type { SmithingInput } from './types';

const STORAGE_KEY = 'toram-smith-calculator-data';

/**
 * ローカルストレージに最新データを保存
 */
export function saveCurrentData(input: SmithingInput): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(input));
  } catch (error) {
    console.error('Failed to save data to localStorage:', error);
  }
}

/**
 * ローカルストレージから最新データを取得
 */
export function loadCurrentData(): SmithingInput | null {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Failed to load data from localStorage:', error);
    return null;
  }
}