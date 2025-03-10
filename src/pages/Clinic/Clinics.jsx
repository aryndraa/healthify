import {SearchBar} from "../../component/SearchBar.jsx";
import {ShortBy} from "../../component/ShortBy.jsx";
import {Banner} from "../../component/Banner.jsx";
import pharmacyHero from "../../assets/pharmacy.png";
import {ListPharmacies} from "../../component/Pharmacy/ListPharmacies.jsx";

export function Clinics() {
  return (
    <>
      <section className="min-h-screen mt-[100px] lg:mt-[160px] mb-4">

        <div className="w-full flex  gap-2 items-center mb-4">
          <SearchBar/>
          <ShortBy/>
        </div>

        <Banner
          image={pharmacyHero}
          title="Find Trusted and Certificated Pharmacies Near You"
          text="Looking for a pharmacy you can trust? Our platform helps you locate nearby
          pharmacies with real-time information on medication availability, operating hours, and additional services.
          Whether you need prescription refills, over-the-counter medicine, or expert advice, we connect you to the
          right place—quickly and hassle-free."
        />

        <div>
          <ListPharmacies/>
        </div>

      </section>
    </>
  )
}