import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import ColorSelector from '../features/colors/components/ColorSelector'
import { colorCards, colorCategories } from '../features/colors/ColorData'

export default async function ColorsPage() {
	const session = await auth()

	if (!session) {
		redirect('/profile')
	}
	return (
		<div className="w-full mx-auto px-2 pb-4 flex-grow pt-20 bg-[#fcfcfc">
			<ColorSelector categories={colorCategories} cards={colorCards} />

			{/*
			<div className="grid grid-cols-2 gap-2">
				<div id="top-card" className={cardContainer({ position: 'top' })}>
					<div className={cardLeft({ class: 'bg-[#ffffff]' })} />
					<div className={cardRight()}>1</div>
				</div>
				<div className={cardContainer({ position: 'top' })}>
					<div className={cardLeft({ class: 'bg-[#c0c0c0]' })} />
					<div className={cardRight()}>2</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#808080]' })} />
					<div className={cardRight()}>3</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#404040]' })} />
					<div className={cardRight()}>4</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#000000]' })} />
					<div className={cardRight()}>5</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#fab3b2]' })} />
					<div className={cardRight()}>6</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#fbcbb3]' })} />
					<div className={cardRight()}>7</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#fcd8b4]' })} />
					<div className={cardRight()}>8</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#fdebb4]' })} />
					<div className={cardRight()}>9</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#fffeb5]' })} />
					<div className={cardRight()}>10</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#e1fdb6]' })} />
					<div className={cardRight()}>11</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#c6fbb6]' })} />
					<div className={cardRight()}>12</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#c7fcda]' })} />
					<div className={cardRight()}>13</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#c7fcff]' })} />
					<div className={cardRight()}>14</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#c2eafe]' })} />
					<div className={cardRight()}>15</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#bdd8fe]' })} />
					<div className={cardRight()}>16</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#b8c6fd]' })} />
					<div className={cardRight()}>17</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#b4b4fd]' })} />
					<div className={cardRight()}>18</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#d2b6fd]' })} />
					<div className={cardRight()}>19</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#f1b8fd]' })} />
					<div className={cardRight()}>20</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#f1b8d8]' })} />
					<div className={cardRight()}>21</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#e87267]' })} />
					<div className={cardRight()}>22</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#ed9e69]' })} />
					<div className={cardRight()}>23</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#f0b66b]' })} />
					<div className={cardRight()}>24</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#f6da6d]' })} />
					<div className={cardRight()}>25</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#fefd71]' })} />
					<div className={cardRight()}>26</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#c6fb70]' })} />
					<div className={cardRight()}>27</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#98f970]' })} />
					<div className={cardRight()}>28</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#99fab6]' })} />
					<div className={cardRight()}>29</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#9bfbff]' })} />
					<div className={cardRight()}>30</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#8cd6fe]' })} />
					<div className={cardRight()}>31</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#7eb2fd]' })} />
					<div className={cardRight()}>32</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#738efc]' })} />
					<div className={cardRight()}>33</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#6a6bfb]' })} />
					<div className={cardRight()}>34</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#a86ffc]' })} />
					<div className={cardRight()}>35</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#e976fc]' })} />
					<div className={cardRight()}>36</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#e873b2]' })} />
					<div className={cardRight()}>37</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#e4390d]' })} />
					<div className={cardRight()}>38</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#e76414]' })} />
					<div className={cardRight()}>39</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#ea881b]' })} />
					<div className={cardRight()}>40</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#f2c228]' })} />
					<div className={cardRight()}>41</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#fefd35]' })} />
					<div className={cardRight()}>42</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#a6fa33]' })} />
					<div className={cardRight()}>43</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#7ff932]' })} />
					<div className={cardRight()}>44</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#7ff986]' })} />
					<div className={cardRight()}>45</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#82faff]' })} />
					<div className={cardRight()}>46</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#62befd]' })} />
					<div className={cardRight()}>47</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#4481fc]' })} />
					<div className={cardRight()}>48</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#2947fb]' })} />
					<div className={cardRight()}>49</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#1c21fb]' })} />
					<div className={cardRight()}>50</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#752bfb]' })} />
					<div className={cardRight()}>51</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#e643fb]' })} />
					<div className={cardRight()}>52</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#e43b7f]' })} />
					<div className={cardRight()}>53</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#881e04]' })} />
					<div className={cardRight()}>54</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#8a3b08]' })} />
					<div className={cardRight()}>55</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#8c510c]' })} />
					<div className={cardRight()}>56</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#917413]' })} />
					<div className={cardRight()}>57</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#98981c]' })} />
					<div className={cardRight()}>58</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#63961a]' })} />
					<div className={cardRight()}>59</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#49951a]' })} />
					<div className={cardRight()}>60</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#4a9551]' })} />
					<div className={cardRight()}>61</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#4b9699]' })} />
					<div className={cardRight()}>62</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#387198]' })} />
					<div className={cardRight()}>63</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#264d97]' })} />
					<div className={cardRight()}>64</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#162b97]' })} />
					<div className={cardRight()}>65</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#0c0f96]' })} />
					<div className={cardRight()}>66</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#461697]' })} />
					<div className={cardRight()}>67</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#892497]' })} />
					<div className={cardRight()}>68</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#89204c]' })} />
					<div className={cardRight()}>69</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#440a01]' })} />
					<div className={cardRight()}>70</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#451e02]' })} />
					<div className={cardRight()}>71</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#462903]' })} />
					<div className={cardRight()}>72</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#493a05]' })} />
					<div className={cardRight()}>73</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#4d4c09]' })} />
					<div className={cardRight()}>74</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#324b08]' })} />
					<div className={cardRight()}>75</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#224b08]' })} />
					<div className={cardRight()}>76</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#224b29]' })} />
					<div className={cardRight()}>77</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#234b4d]' })} />
					<div className={cardRight()}>78</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#19394c]' })} />
					<div className={cardRight()}>79</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#10274c]' })} />
					<div className={cardRight()}>80</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#08154c]' })} />
					<div className={cardRight()}>81</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#03044c]' })} />
					<div className={cardRight()}>82</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#23064c]' })} />
					<div className={cardRight()}>83</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#440d4c]' })} />
					<div className={cardRight()}>84</div>
				</div>
				<div className={cardContainer()}>
					<div className={cardLeft({ class: 'bg-[#440b26]' })} />
					<div className={cardRight()}>85</div>
				</div>
			</div>
      */}
		</div>
	)
}
