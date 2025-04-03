import { SearchBar } from "../../component/SearchBar";
import drugsImage from "../../assets/drugs.png";
import xIcon from "../../assets/x-icon.svg";
import { DrugCard } from "../../component/Drugs/Drug";
import { drugData } from "./drugsdta";
import { useState, useEffect } from "react";
import { Filter } from "../../component/Drugs/FilterDrug";

export function Drugs() {
	const [searchQuery, setSearchQuery] = useState("");
	const [active, setActive] = useState(false);
	const [tagsActive, setTagsActive] = useState([]);
	const [filteredDrugs, setFilteredDrugs] = useState(drugData);

	const level = [
		"Over-the-counter",
		"Limited Over-the-Counter",
		"Herbal",
		"Hard Drugs",
		"Narcotics",
	];
	const tags = [
		"Flu",
		"Cough",
		"Fever",
		"Pain",
		"Acid",
		"Digestion",
		"Allergy",
		"Vitamins",
		"Antibiotics",
		"Eyes",
		"Heart",
		"Diabetes",
		"Asthma",
		"Women",
		"Men",
		"Sleep",
		"Muscle",
		"Wounds",
	];

	const toggleTag = (tag) => {
		setTagsActive((prev) =>
			prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
		);
	};

	const clearFilters = () => {
		setTagsActive([]);
	};

	useEffect(() => {
		let filtered = drugData;

		if (tagsActive.length > 0) {
			filtered = filtered.filter((drug) =>
				tagsActive.some(
					(tag) => drug.Tags.includes(tag) || drug.Level.includes(tag)
				)
			);
		}

		if (searchQuery) {
			filtered = filtered.filter((drug) =>
				drug.title.toLowerCase().includes(searchQuery.toLowerCase())
			);
		}

		setFilteredDrugs(filtered);
	}, [tagsActive, searchQuery]);

	return (
		<div className="relative min-h-screen mt-[100px] sm:mt-[160px] mb-4">
			
			<div className="w-full flex gap-2 items-center mb-4">
				<SearchBar onSearch={setSearchQuery} />
				<Filter onClick={() => setActive((prev) => !prev)} />
			</div>

			{active && (
				<div className="w-full grid grid-cols-4 absolute">
					<div className="col-span-3 col-start-2 bg-white p-8 rounded-xl">
						<div className="flex justify-end">
							<button onClick={() => setActive(false)} >
								<img src={xIcon} alt="Close" />
							</button>
						</div>

						{/* Types */}
						<div>
							<p className="font-medium text-xl">Types</p>
							<hr />
							<div className="tags mt-4 flex gap-3 flex-wrap">
								{tags.map((tag, index) => (
									<button
										key={index}
										onClick={() => toggleTag(tag)}
										className={`border border-[#213170] rounded-full px-4 py-2 transition-colors duration-300 ${
											tagsActive.includes(tag)
												? "bg-[#213170] text-white"
												: "hover:bg-[#213170] hover:text-white"
										}`}
									>
										{tag}
									</button>
								))}
							</div>
						</div>

						{/* Level */}
						<div className="mt-4">
							<p className="font-medium text-xl">Level</p>
							<hr />
							<div className="tags mt-4 flex gap-3 flex-wrap">
								{level.map((tag, index) => (
									<button
										key={index}
										onClick={() => toggleTag(tag)}
										className={`border border-[#213170] rounded-full px-4 py-2 transition-colors duration-300 ${
											tagsActive.includes(tag)
												? "bg-[#213170] text-white"
												: "hover:bg-[#213170] hover:text-white"
										}`}
									>
										{tag}
									</button>
								))}
							</div>
						</div>
					</div>
				</div>
			)}

			{tagsActive.length > 0 && (
				<div className="my-4 border rounded-full items-center gap-4 p-8 flex bg-white">
					<p className="font-semibold text-2xl">Filter Applied:</p>
					<div className="flex flex-wrap gap-2 mt-2">
						{tagsActive.map((tag, index) => (
							<span
								key={index}
								className="px-4 py-2 bg-[#213170] text-white rounded-full"
							>
								{tag}
							</span>
						))}
						<button className="text-red-500" onClick={clearFilters}>
							Clear Filter
						</button>
					</div>
				</div>
			)}

			{/* Hero Section */}
			<div className="flex items-stretch xl:gap-4 mb-4">
				<div>
					<img
						src={drugsImage}
						alt="drugs illustration"
						className="w-[28rem] 2xl:w-full object-cover rounded-xxl h-full max-[1550px]:hidden"
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
						interactions, and safety guidelines, to make
						well-informed healthcare decisions for yourself and your
						loved ones.
					</p>
				</div>
			</div>

			{/* Drug List */}
			<div className="w-full grid gap-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
				{filteredDrugs.length > 0 ? (
					filteredDrugs
						.slice(0, 12)
						.map((drug) => (
							<DrugCard
								key={drug.id}
								id={drug.id}
								pricing={drug.pricing}
								title={drug.title}
								standFor={drug.standFor}
								illustration={drug.ilustration}
								drugLevel={drug.drugLevel}
							/>
						))
				) : (
					<p className="col-span-full text-center text-gray-500">
						No results found.
					</p>
				)}
			</div>
		</div>
	);
}
