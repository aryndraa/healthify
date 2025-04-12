import {SearchBar} from "../../component/SearchBar.jsx";
import {ShortBy} from "../../component/ShortBy.jsx";
import {Banner} from "../../component/Banner.jsx";
import pharmacyHero from "../../assets/pharmacy.png";
import {ListClinics} from "../../component/Clinic/ListClinics.jsx";
import {clinics} from "./clinicData.js";
import FindFacility from "../../component/Clinic/FindFacility.jsx";
import {FIndType} from "../../component/Clinic/FIndType.jsx";
import {useEffect, useState} from "react";
import {useClinic} from "../../contexts/ClinicContext.jsx";
import {Filter} from "../../component/Drugs/FilterDrug.jsx";
import xIcon from "../../assets/x-icon.svg";

export function Clinics() {

	const typesValue = FIndType(clinics)

	const {setType, type, search, setSearch} = useClinic();
	const [isLoading, setIsLoading] = useState(false);
	const [active, setActive] = useState(false);

	const [typeActive, setTypeActive] = useState([]);

	useEffect(() => {
		if (search && search.length > 0) {
			setIsLoading(true);
			const delay = setTimeout(() => {
				setIsLoading(false);
			}, 800	);

			return () => clearTimeout(delay);
		} else {
			setIsLoading(false);
		}

		if(typeActive.length > 0) {
			setIsLoading(true);

			const delay = setTimeout(() => {
				setIsLoading(false);
			}, 800	);

			setType(typeActive);

			return () => clearTimeout(delay);
		} else {
			setIsLoading(false);
		}


	}, [search, type, typeActive]);

	const toggleType = (tag) => {
		setTypeActive((prev) => {
			if (prev.includes(tag)) {
				const updatedTypes = prev.filter((t) => t !== tag);
				setType(updatedTypes);
				return updatedTypes;
			} else {
				const updatedTypes = [...prev, tag];
				setType(updatedTypes);
				return updatedTypes;
			}
		});
	};


	const clearFilters = () => {
		setTypeActive([]);
		setType([])
	};

  return (
		<>
			<section className="min-h-screen  mb-4 relative">
				<div className="w-full flex  gap-2 items-center mb-4">
					<SearchBar
						placeholder="Saerch clinics near you!"
						onSearch={setSearch}
					/>
					<Filter
						onClick={() => setActive((prev) => !prev)}
					/>
				</div>

				{active && (
					<div className="w-[70%]  right-0 grid grid-cols-4 absolute z-30">
						<div className="col-span-4  md:col-span-3 md:col-start-2 bg-white shadow-lg p-8 rounded-xl">
							<div className="flex justify-end">
								<button onClick={() => setActive(false)}>
									<img src={xIcon} alt="Close" />
								</button>
							</div>

							<div className="mb-8">
								<p className="font-medium text-xl border-b border-secondary pb-4">Type</p>
								<div className="tags mt-4 flex gap-3 flex-wrap">
									{typesValue.map((tag, index) => (
										<button
											key={index}
											onClick={() => toggleType(tag)}
											className={`border border-[#213170] rounded-full px-4 py-2 transition-colors duration-300 ${
												typeActive.includes(tag)
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

				{type.length > 0 ? (
					<div className="my-4 border rounded-2xl items-center gap-4 p-8 flex bg-white md:flex-row flex-col md:rounded-full">
						<p className="font-semibold text-2xl">Filter Applied:</p>
						<div className="flex flex-wrap gap-2 mt-2">
							{typeActive.map((tag, index) => (
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
				) : ""}

				{
					search && search.length > 0
					|| type.length > 0
						?
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
					<ListClinics isLoading={isLoading} />
				</div>
			</section>
		</>
  );
}