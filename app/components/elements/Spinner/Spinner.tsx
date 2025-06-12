const Spinner = () => {
	return (
		<>
			{/*}
    <div className="flex w-full items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-black" />
    </div>
    */}
			<div className="flex grow items-center justify-center gap-6">
				<div className="h-10 w-10 animate-spin rounded-full border-[5px] border-blue-400 border-t-transparent" />
				<p className="text-[30px]">Loading</p>
			</div>
		</>
	)
}

export default Spinner
