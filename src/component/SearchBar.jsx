import searchIcon from "../assets/search.svg"

export const SearchBar = () => {
  return (
    <form action="" className="flex  w-full bg-white rounded-full">
      <input type="text" placeholder="Search nearby pharmacy" className="flex-1 w-full py-7 px-12 placeholder:text-text rounded-full text-lg focus:outline-none placeholder:font-medium" />
      <button className="bg-trinary p-6 rounded-full">
        <img src={searchIcon} alt="" />
      </button>
    </form>
  )
}
