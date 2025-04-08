import { IoIosArrowRoundForward } from "react-icons/io";

export const MoreLink = ({name}) => {
  return (
    <div className="group">
      <div
        className=" flex justify-between py-3 2xl:py-5 px-4 lg:px-8 2xl:px-12 bg-white rounded-xl lg:rounded-full items-center gap-2 group ">
        <p className="text-lg lg:text-2xl 2xl:text-4xl font-semibold">{name}</p>
        <span className="group-hover:text-white  text-4xl 2xl:text-5xl lg:p-2.5 2xl:p-4  bg-trinary rounded-full group-hover:bg-secondary transform -rotate-45 group-hover:rotate-0 transition ease-in-out duration-300">{<IoIosArrowRoundForward/>}</span>
      </div>
    </div>

    )
}