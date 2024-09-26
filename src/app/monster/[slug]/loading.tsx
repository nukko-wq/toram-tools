const Loading = () => {
  return (
    <div className="flex justify-center items-center gap-6 flex-grow">
      <div className="h-10 w-10 animate-spin border-[5px] border-blue-400 rounded-full  border-t-transparent" />
      <p className="text-[30px] font-weight">Loading</p>
    </div>
  )
}

export default Loading