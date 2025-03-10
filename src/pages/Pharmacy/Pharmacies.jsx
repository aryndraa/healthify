import { SearchBar } from "../../component/SearchBar.jsx";
import { ShortBy } from "../../component/ShortBy.jsx";
import pharmacyHero from "../../assets/pharmacy.png"
import { ListPharmacies } from "../../component/ListPharmacies.jsx";
import {Banner} from "../../component/Banner.jsx";

export function Pharmacies() {
  return (
    <>
      <section className="min-h-screen mt-[100px] lg:mt-[160px] mb-4">

        <div className="w-full flex  gap-2 items-center mb-4">
          <SearchBar/>
          <ShortBy/>
        </div>

        <Banner image={pharmacyHero}/>

        <div>
          <ListPharmacies/>
        </div>

      </section>
    </>
  )
}