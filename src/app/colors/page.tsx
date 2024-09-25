import { auth, signOut } from '@/auth'
import { redirect } from 'next/navigation'

type Props = {
  q?: string
}

export default async function ColorsPage() {

  const session = await auth()
  console.log("🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 ~ ColorsPage ~ session:", session)
  const user = session?.user

  if (!session) {
    redirect('/profile')
  }
  return (
    <div className='w-full mx-auto px-10 py-6 flex-grow pt-24'>
      <div className='grid grid-cols-17 gap-4'>
        <div className='relative grid grid-rows-subgrid h-14 bg-[#ffffff]'><div className='w-full absolute top-[50%] mt-[-12px] text-center opacity-0 hover:opacity-100 transition duration-100'>1</div></div>
        <div className='h-14 bg-[#c0c0c0]'>2</div>
        <div className='h-14 bg-[#808080]'>3</div>
        <div className='bg-[#404040]'>4</div>
        <div className='bg-[#000000]'>5</div>
        <div className='bg-blue-100'>6</div>
        <div className='bg-blue-100'>7</div>
        <div className='bg-blue-100'>8</div>
        <div className='bg-blue-100'>9</div>
        <div className='bg-blue-100'>10</div>
        <div className='bg-blue-100'>11</div>
        <div className='bg-blue-100'>12</div>
        <div className='bg-blue-100'>13</div>
        <div className='bg-blue-100'>14</div>
        <div className='bg-blue-100'>15</div>
        <div className='bg-blue-100'>16</div>
        <div className='bg-blue-100'>17</div>
        <div className='bg-blue-100'>18</div>
        <div className='bg-blue-100'>19</div>
        <div className='bg-blue-100'>20</div>
        <div className='bg-blue-100'>21</div>
        <div className='bg-blue-100'>22</div>
        <div className='bg-blue-100'>23</div>
        <div className='bg-blue-100'>24</div>
        <div className='bg-blue-100'>25</div>
        <div className='bg-blue-100'>26</div>
        <div className='bg-blue-100'>27</div>
        <div className='bg-blue-100'>28</div>
        <div className='bg-blue-100'>29</div>
        <div className='bg-blue-100'>30</div>
        <div className='bg-blue-100'>31</div>
        <div className='bg-blue-100'>32</div>
        <div className='bg-blue-100'>33</div>
        <div className='bg-blue-100'>34</div>
        <div className='bg-blue-100'>35</div>
        <div className='bg-blue-100'>36</div>
        <div className='bg-blue-100'>37</div>
        <div className='bg-blue-100'>38</div>
        <div className='bg-blue-100'>39</div>
        <div className='bg-blue-100'>40</div>
        <div className='bg-blue-100'>41</div>
        <div className='bg-blue-100'>42</div>
        <div className='bg-blue-100'>43</div>
        <div className='bg-blue-100'>44</div>
        <div className='bg-blue-100'>45</div>
        <div className='bg-blue-100'>46</div>
        <div className='bg-blue-100'>47</div>
        <div className='bg-blue-100'>48</div>
        <div className='bg-blue-100'>49</div>
        <div className='bg-blue-100'>50</div>
        <div className='bg-blue-100'>51</div>
        <div className='bg-blue-100'>52</div>
        <div className='bg-blue-100'>53</div>
        <div className='bg-blue-100'>54</div>
        <div className='bg-blue-100'>55</div>
        <div className='bg-blue-100'>56</div>
        <div className='bg-blue-100'>57</div>
        <div className='bg-blue-100'>58</div>
        <div className='bg-blue-100'>59</div>
        <div className='bg-blue-100'>60</div>
        <div className='bg-blue-100'>61</div>
        <div className='bg-blue-100'>62</div>
        <div className='bg-blue-100'>63</div>
        <div className='bg-blue-100'>64</div>
        <div className='bg-blue-100'>65</div>
        <div className='bg-blue-100'>66</div>
        <div className='bg-blue-100'>67</div>
        <div className='bg-blue-100'>68</div>
        <div className='bg-blue-100'>69</div>
        <div className='bg-blue-100'>70</div>
        <div className='bg-blue-100'>71</div>
        <div className='bg-blue-100'>72</div>
        <div className='bg-blue-100'>73</div>
        <div className='bg-blue-100'>74</div>
        <div className='bg-blue-100'>75</div>
        <div className='bg-blue-100'>76</div>
        <div className='bg-blue-100'>77</div>
        <div className='bg-blue-100'>78</div>
        <div className='bg-blue-100'>79</div>
        <div className='bg-blue-100'>80</div>
        <div className='bg-blue-100'>81</div>
        <div className='bg-blue-100'>82</div>
        <div className='bg-blue-100'>83</div>
        <div className='bg-blue-100'>84</div>
        <div className='bg-blue-100'>85</div>
      </div>

    </div>

  )
}
