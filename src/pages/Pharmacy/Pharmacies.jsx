	import { SearchBar } from "../../component/SearchBar.jsx";
	import { ShortBy } from "../../component/ShortBy.jsx";
	import pharmacyHero from "../../assets/pharmacy.png"
	import { ListPharmacies } from "../../component/Pharmacy/ListPharmacies.jsx";
	import {Banner} from "../../component/Banner.jsx";
	import {usePharmacy} from "./../../contexts/PharmacyContext.jsx"
	import {Filter} from "../../component/Drugs/FilterDrug.jsx";
	import { useEffect, useState } from "react";
	import xIcon from "../../assets/x-icon.svg";


	export function Pharmacies() {

		const {setType, type, search, setSearch} = usePharmacy();
		const [isLoading, setIsLoading] = useState(false);
		const [active, setActive] = useState(false);
		const types = [
			"General Medical Clinics",
			"Ophthalmology Clinics",
			"Dental Clinics",
			"Dermatology Clinics",
			"ENT Clinics",
			"Physiotherapy Clinics"
		]
		const [tagsActive, setTagsActive] = useState([]);


		useEffect(() => {
			if (search && search.length > 0) {
				setIsLoading(true);
				const delay = setTimeout(() => {
					setIsLoading(false);
				}, 800	); // Delay untuk simulasi loading

				return () => clearTimeout(delay);
			} else {
				setIsLoading(false);
			}

			if(tagsActive.length > 0) {

				setIsLoading(true);
				const delay = setTimeout(() => {
					setIsLoading(false);
				}, 800	); // Delay untuk simulasi loading

				setType(tagsActive)
				return () => clearTimeout(delay);
			} else {
				setIsLoading(false);
			}
			console.log(type)
		}, [search, type, tagsActive]);

		const toggleTag = (tag) => {
			setTagsActive((prev) =>
				prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
			);
		};

		const clearFilters = () => {
			setTagsActive([]);
			setType([])
		};

		return (
			<>
				<section className="max-h-fit relative  mb-4">
					<div className="w-full flex  gap-2 items-center mb-4">
						<SearchBar
							placeholder="Search nearby pharmacy"
							onSearch={setSearch}
						/>
						<Filter
							onClick={() => setActive((prev) => !prev)}
						/>
					</div>

					{active && (
						<div className="w-[60%]  right-0 grid grid-cols-4 absolute z-30">
							<div className="col-span-4  md:col-span-3 md:col-start-2 bg-white shadow-lg p-8 rounded-xl">
								<div className="flex justify-end">
									<button onClick={() => setActive(false)}>
										<img src={xIcon} alt="Close" />
									</button>
								</div>

								<div>
									<p className="font-medium text-xl border-b border-secondary pb-4">Type</p>
									<div className="tags mt-4 flex gap-3 flex-wrap">
										{types.map((tag, index) => (
											<button
												key={index}
												onClick={() => toggleTag(tag)}
												className={`border border-[#213170] rounded-full px-4 py-2 transition-colors duration-300 ${
													tagsActive.includes(tag)
														? "bg-[#213170] text-white"
														: ""
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
						<div className="my-4 border rounded-2xl items-center gap-4 p-8 flex bg-white md:flex-row flex-col md:rounded-full">
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


					{
						search && search.length > 0 ?
							""
							:
							<Banner
								image={pharmacyHero}
								title="Find Trusted and Certificated Pharmacies Near You"
								text="Looking for a pharmacy you can trust? Our platform helps you locate nearby
											pharmacies with real-time information on medication availability, operating hours, and additional services.
											Whether you need prescription refills, over-the-counter medicine, or expert advice, we connect you to the
											right place—quickly and hassle-free."
							/>
					}


					<div>
						<ListPharmacies isLoading={isLoading} />
					</div>
				</section>
			</>
		);
	}

