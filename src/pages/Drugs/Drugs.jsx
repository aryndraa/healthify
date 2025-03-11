import { SearchBar } from "../../component/SearchBar";
import { ShortBy } from "../../component/ShortBy";
import drugs from "../../assets/drugs.png"
import { DrugCard } from "../../component/Drugs/Drug";
import { drugData } from "./drugsdta";


export function Drugs() {
return (
	<div className="min-h-screen  mt-[100px] sm:mt-[160px] mb-4">
		<div className="w-full flex gap-2 items-center mb-4">
			<SearchBar />
			<ShortBy />
		</div>
		<div className="flex items-stretch xl:gap-4 mb-4">
			<div>
				<img
					src={drugs}
					alt="drugs illustration"
					className=" w-[28rem] 2xl:w-full object-cover rounded-xxl h-full max-[1550px]:hidden"
				/>
			</div>
			<div className="bg-white flex-1 min-h-full rounded-xxl p-10 2xl:p-16">
				<h1 className="font-semibold text-4xl 2xl:text-5xl mb-6 2xl:mb-16">
					Discover Reliable Drug Information for Safe and Informed
					Healthcare
				</h1>
				<p className="text-sm 2xl:text-xl">
					Explore a complete database of trusted drug information,
					including uses, dosages, side effects, precautions,
					interactions, and safety guidelines, to make well-informed
					healthcare decisions for yourself and your loved ones.
				</p>
			</div>
		</div>
		<div>
			{drugData.map((drug) => (
				<DrugCard
					key={drug.id}
					id={drug.id}
					pricing={drug.pricing}
					title={drug.title}
					standFor={drug.standFor}
					illustration={drug.ilustration}
					drugLevel={drug.drugLevel}
				/>
			))}
		</div>
	</div>
);

}
