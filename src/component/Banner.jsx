
export const Banner = ({image, title, text}) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-stretch gap-4 mb-4"
    >
      <div className="hidden lg:block bg-transparent">
        <img src={image} alt=""
             className="w-full lg:w-[28rem] 2xl:h-[400px] 2xl:w-[661px] object-cover lg:rounded-xxl bg rounded-lg h-[18rem] "/>
      </div>
      <div className="bg-white flex flex-col justify-between flex-1 min-h-full rounded-xl lg:rounded-xxl p-6 lg:py-12 lg:p-14 2xl:p-14">
        <h1 className="font-semibold text-xl lg:text-4xl 2xl:text-5xl leading-8">
          {title}
        </h1>
        <p className="text-sm 2xl:text-xl">
          {text}
        </p>
      </div>
    </div>
  )
}