import {Link} from 'react-router-dom'

export const PharmacyCard = () => {
  return (
    <Link to="1" className="relative w-full h-fit  2xl:w-full lg:h-[320px] xl:h-[320px] 2xl:h-[450px]">
      <img 
        src="https://images.unsplash.com/photo-1604145942179-63cd583fcf64?q=80&w=3041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt=""
        className="hidden lg:block w-full h-[240px] lg:h-[320px] 2xl:h-[450px] object-cover rounded-xl lg:rounded-xxl "
      />
      <div className="lg:absolute bottom-0 right-0 left-0 lg:m-2 bg-white  lg:rounded-xxl p-5 rounded-xl border-b lg:p-5  2xl:p-6 ">
        <div className="flex items-center gap-3 lg:gap-3 mb-2 2xl:mb-3">
          <span className="px-3 lg:px-6 bg-secondary text-white rounded-xxl py-1 text-xs lg:text-base 2xl:text-lg font-medium">Open</span>
          <p className="text-sm lg:text-base 2xl:text-lg font-medium">24 Hours</p>
        </div>        
        <div className="flex lg:items-end gap-4 lg:gap-2  justify-between items-center">
          <div>
            <h3 className=" lg:text-base 2xl:text-2xl font-semibold">
              Apotek Kimia Farma Diponegoro
            </h3>
            <p className="text-sm 2xl:text-lg font-medium opacity-80">Community Pharmacies</p>
          </div>
          <span className="text-lg text-nowrap md:text-2xl 2xl:text-3xl text-secondary font-semibold">2 KM</span>
        </div>
      </div>
    </Link>
  )
}
