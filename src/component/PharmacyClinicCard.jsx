import {Link} from 'react-router-dom'

export const PharmacyClinicCard = ({img, time, name, type, id, loading}) => {
  return (
    <Link to={`${id}`} className="relative w-full h-fit  2xl:w-full lg:h-[320px] xl:h-[320px] 2xl:h-[450px]">
      <img
        src={img}
        alt=""
        className="hidden lg:block w-full h-[240px] lg:h-[320px] 2xl:h-[450px] object-cover rounded-xl lg:rounded-xxl "
      />
      <div
        className="lg:absolute bottom-0 right-0 left-0 lg:m-2 bg-white  lg:rounded-xxl p-5 rounded-xl border-b lg:p-5  2xl:p-6 ">
        <div className="flex items-center gap-3 lg:gap-3 mb-2 2xl:mb-3">
          <span
            className="px-3 lg:px-6 bg-secondary text-white rounded-xxl py-1 text-xs lg:text-base 2xl:text-lg font-medium">Open</span>
          <p className="text-sm lg:text-base 2xl:text-lg font-medium">{time}</p>
        </div>
        <div className="flex lg:items-start gap-4 lg:gap-2  justify-between items-center">
          <div>
            <h3 className=" lg:text-base 2xl:text-2xl font-semibold">
              {name}
            </h3>
            <p className="text-sm 2xl:text-lg font-medium opacity-80">{type}</p>
          </div>
          {/*<span className="text-lg text-nowrap md:text-2xl 2xl:text-3xl text-secondary font-semibold">2 KM</span>*/}
        </div>
      </div>
      {
        loading ?
          (
           <>
            <div className="bg-white  rounded-xxl absolute inset-0"/>
            <div className="bg-neutral-300 animate-pulse rounded-xxl absolute inset-0"/>
           </>
          )
          :
          ""
      }
    </Link>
  )
}
