import {MapsView} from "../../component/MapsView.jsx";
import {SearchBar} from "../../component/SearchBar.jsx";
import {ShortBy} from "../../component/ShortBy.jsx";
import {useParams} from "react-router-dom";
import {pharmacies} from "./pharmachyData.js";

export function PharmacyDetail() {

  const {id} = useParams();
  const pharmacy = pharmacies.find((p) => p.id === parseInt(id));

  console.log(id);

  return (
    <>
      <section className="min-h-screen mt-[100px] lg:mt-[160px] mb-4">

        <div className="flex flex-col-reverse lg:flex-row gap-4 mb-6 lg:mb-14 2xl:mb-24">
          <img
            src={pharmacy.image}
            alt=""
            className="h-[220px] 2xl:h-[549px] lg:h-[420px] p-4 lg:p-0 bg-white lg:bg-transparent  object-cover rounded-lg lg:rounded-xxl"
          />

          <div className="w-full flex flex-col gap-4 bg-white lg:bg-transparent p-4 lg:p-0 rounded-lg">
            <div className="bg-white rounded-lg lg:rounded-xxl flex flex-col lg:flex-row justify-between p-0 lg:p-8 2xl:p-12">
              <div className="w-full lg:w-[65%] 2xl:w-[60%] mb-2">
                <h1 className="text-xl lg:text-3xl 2xl:text-5xl lg:mb-4 2xl:mb-6 font-semibold leading-8">{pharmacy.name}</h1>
                <p className="text-sm lg:text-base 2xl:text-lg">{pharmacy.address}</p>
              </div>
              <div className="flex h-fit items-center gap-4 text-sm lg:text-lg 2xl:text-2xl">
                <span>{pharmacy.time}</span>
                <span className="bg-secondary h-fit py-1 px-4 lg:px-6 rounded-full text-white">Open</span>
              </div>
            </div>
            <div>
              <MapsView map={pharmacy.address_link}/>
            </div>
          </div>
        </div>

        <div>
          <div className="w-full flex  gap-2 items-center mb-4">
            <SearchBar placeholder={"Search Drugs on our listing"}/>
          </div>
        </div>
      </section>
    </>
  )
}