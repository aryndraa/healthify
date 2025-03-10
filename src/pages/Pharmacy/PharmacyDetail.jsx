import {MapsView} from "../../component/MapsView.jsx";
import {SearchBar} from "../../component/SearchBar.jsx";
import {ShortBy} from "../../component/ShortBy.jsx";

export function PharmacyDetail() {
  return (
    <>
      <section className="min-h-screen mt-[100px] lg:mt-[160px] mb-4">

        <div className="flex flex-col-reverse lg:flex-row gap-4 mb-6 lg:mb-14 2xl:mb-24">
          <img
            src="https://images.unsplash.com/photo-1604145942179-63cd583fcf64?q=80&w=3041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-[220px] 2xl:h-[549px] lg:h-[420px] p-4 lg:p-0 bg-white lg:bg-transparent  object-cover rounded-lg lg:rounded-xxl"
          />

          <div className="w-full flex flex-col gap-4 bg-white lg:bg-transparent p-4 lg:p-0 rounded-lg">
            <div className="bg-white rounded-lg lg:rounded-xxl flex flex-col lg:flex-row justify-between p-0 lg:p-8 2xl:p-12">
              <div className="w-full lg:w-[65%] 2xl:w-[60%] mb-2">
                <h1 className="text-xl lg:text-3xl 2xl:text-5xl lg:mb-4 2xl:mb-6 font-semibold">Dyven Pharmacy</h1>
                <p className="text-sm lg:text-base 2xl:text-lg">Jl. Diponegoro No.125, Dauh Puri Klod, Kec. Denpasar Barat, Kota Denpasar, Bali 80114, Indonesia</p>
              </div>
              <div className="flex h-fit items-center gap-4 text-sm lg:text-lg 2xl:text-2xl">
                <span>24 Hours</span>
                <span className="bg-secondary h-fit py-1 px-4 lg:px-6 rounded-full text-white">Open</span>
              </div>
            </div>
            <div>
              <MapsView/>
            </div>
          </div>
        </div>

        <div>
          <div className="w-full flex  gap-2 items-center mb-4">
            <SearchBar/>
          </div>
        </div>
      </section>
    </>
  )
}