import { SearchBar } from "../../component/SearchBar.jsx";
import { ShortBy } from "../../component/ShortBy.jsx";
import pharmacyHero from "../../assets/pharmacy.png"
import { ListPharmacies } from "../../component/Pharmacy/ListPharmacies.jsx";
import {Banner} from "../../component/Banner.jsx";

export function Pharmacies() {
  return (
		<>
			<section className="min-h-screen  mb-4">
				<div className="w-full flex  gap-2 items-center mb-4">
					<SearchBar placeholder="Search nearby pharmacy" />
					<ShortBy />
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
					<ListPharmacies />
				</div>
			</section>
		</>
  );
}