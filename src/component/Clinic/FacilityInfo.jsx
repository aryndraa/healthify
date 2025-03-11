import { MdOutlineMapsUgc } from "react-icons/md";

export const FacilityInfo = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-3 2xl:gap-4 bg-white rounded-xl lg:rounded-full p-3 2xl:p-4">
        <span className="p-2 2xl:p-4 w-fit text-xl 2xl:text-2xl bg-trinary rounded-xl lg:rounded-full">
          <MdOutlineMapsUgc/>
        </span>
        <p className=" 2xl:text-xl font-semibold">
          Minor Surgery
        </p>
      </div>
    </>
  )
}