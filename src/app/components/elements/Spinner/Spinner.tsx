const Spinner = () => {
  return (
    <>
      {/*}
    <div className="flex w-full items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-black" />
    </div>
    */}
      <div className="flex justify-center items-center gap-6 flex-grow">
        <div className="h-10 w-10 animate-spin border-[5px] border-blue-400 rounded-full border-t-transparent" />
        <p className="text-[30px]">Loading</p>
      </div>
    </>
  )
}

export default Spinner