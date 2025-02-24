import searchIcon from "./../assets/search.svg"

export const SearchBar = () => {
  return (
    <form action="" className="flex  w-full bg-white rounded-full">
      <input type="text" placeholder="Search nearby pharmacy" className="flex-1 w-full py-4 2xl:py-7 px-8 2xl:px-12 placeholder:text-text rounded-full 2xl:text-xl focus:outline-none placeholder:font-medium" />
      <button className="bg-trinary p-5 2xl:p-6 rounded-full">
        <img src={searchIcon} alt="" className="w-5 2xl:w-8" />
      </button>
    </form>
  )
}
