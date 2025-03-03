import {MapsView} from "../../component/MapsView.jsx";
import {SearchBar} from "../../component/SearchBar.jsx";
import {ShortBy} from "../../component/ShortBy.jsx";

export function Detail() {
  return (
    <>
      <section className="min-h-screen mt-[100px] lg:mt-[160px] mb-4">

        <div className="flex gap-4 mb-24">
          <img
            src="https://images.unsplash.com/photo-1604145942179-63cd583fcf64?q=80&w=3041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="2xl:h-[549px] 2xl:w-[549px] object-cover rounded-xxl"
          />
          <div className="w-full flex flex-col gap-4">
            <div className="bg-white rounded-xxl flex justify-between p-12">
              <div className="w-[60%]">
                <h1 className="text-5xl mb-6 font-semibold">Dyven Pharmacy</h1>
                <p className="text-lg">Jl. Diponegoro No.125, Dauh Puri Klod, Kec. Denpasar Barat, Kota Denpasar, Bali 80114, Indonesia</p>
              </div>
              <div className="flex h-fit items-center gap-4 text-2xl">
                <span>24 Hours</span>
                <span className="bg-secondary h-fit py-1 px-6 rounded-full text-white">Open</span>
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
            <ShortBy/>
          </div>  x
        </div>
      </section>
    </>
  )
}