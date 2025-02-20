import sortIcon from "./../assets/filter.svg"
import downIcon from "./../assets/down.svg"

export const ShortBy = () => {
  return (
    <div className="flex items-center gap-2 ">
      <div className="p-6 bg-trinary rounded-full min-w-9">
        <img src={sortIcon} alt="" className="min-w-9 h-8"/>
      </div>
      <button className="text-lg font-medium flex items-center gap-6 text-text py-7 px-12 bg-white rounded-full text-nowrap">
        Sort by Relevancy
        <div>
          <img src={downIcon} alt="" className="min-w-9 h-8"/>
        </div>
      </button>
    </div>
  )
}
