import { SearchBar } from "../../component/SearchBar.jsx";
import { ShortBy } from "../../component/ShortBy.jsx";
import pharmacyHero from "../../assets/pharmacy.png"
import { ListPharmacies } from "../../component/ListPharmacies.jsx";

export function Pharmacy() {
  return (
    <>
      <section className="min-h-screen mt-[160px] mb-4">

        <div className="w-full flex gap-2 items-center mb-4">
          <SearchBar/>
          <ShortBy/>
        </div>

        <div className="flex items-stretch gap-4 mb-4">
          <div>
            <img src={pharmacyHero} alt="" className=" w-[28rem] 2xl:w-full object-cover rounded-xxl h-full" />
          </div>
          <div className="bg-white flex-1 min-h-full rounded-xxl p-10 2xl:p-16">
            <h1 className="font-semibold text-4xl 2xl:text-5xl mb-6 2xl:mb-16">Find Trusted and Certificated Pharmacies Near You</h1>
            <p className="text-sm 2xl:text-xl">Looking for a pharmacy you can trust? Our platform helps you locate nearby pharmacies with real-time information on medication availability, operating hours, and additional services. Whether you need prescription refills, over-the-counter medicine, or expert advice, we connect you to the right place—quickly and hassle-free.</p>
          </div>
        </div>

        <div>
          <ListPharmacies/>
        </div>

      </section>
    </>
  )
}