import {SearchBar} from "../../component/SearchBar.jsx";
import {ShortBy} from "../../component/ShortBy.jsx";
import {Banner} from "../../component/Banner.jsx";
import diseaseHero from "../../assets/disease.jpg";
import {ListWords} from "../../component/Disease/ListWords.jsx";
import {DiseaseCard} from "../../component/Disease/DiseaseCard.jsx";

export function Diseases() {
  return (
		<>
			<section className="min-h-screen  mb-4">
				<div className="w-full flex  gap-2 items-center mb-4">
					<SearchBar placeholder="Search Disease on our listing" />
				</div>

				<Banner
					image={diseaseHero}
					title="Discover Reliable Drug Information for Safe and Informed Healthcare"
					text="Explore a complete database of trusted drug information, including uses, dosages, side effects, precautions, interactions, and safety guidelines, to make well-informed healthcare decisions for yourself and your loved ones."
				/>

				<div className="grid grid-cols-1 w lg:grid-cols-3 gap-x-0 gap-y-4  lg:gap-4 my-4 lg:my-12">
					<ListWords />
					<div className="grid grid-cols-1 lg:grid-cols-2 col-span-2 gap-4 w-fit">
						<DiseaseCard />
						<DiseaseCard />
						<DiseaseCard />
						<DiseaseCard />
					</div>
				</div>
			</section>
		</>
  );
}