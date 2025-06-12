import Header from '../components/layouts/header/header'
import SmithCalculator from './components/SmithCalculator'

export default function SmithCalculatorPage() {
	return (
		<>
			<Header title="トーラム スミス成功率計算" link="/" />
			<SmithCalculator />
		</>
	)
}
