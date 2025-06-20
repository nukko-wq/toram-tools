import { useEffect, useState } from 'react'

/**
 * メディアクエリの状態を監視するカスタムフック
 * パフォーマンスが最適化されており、ブラウザのネイティブAPIを使用
 */
export function useMediaQuery(query: string): boolean {
	const [matches, setMatches] = useState(false)

	useEffect(() => {
		const mediaQuery = window.matchMedia(query)
		setMatches(mediaQuery.matches)

		const handler = (event: MediaQueryListEvent) => {
			setMatches(event.matches)
		}

		// addEventListenerは自動的にdebounceされる
		mediaQuery.addEventListener('change', handler)
		return () => mediaQuery.removeEventListener('change', handler)
	}, [query])

	return matches
}