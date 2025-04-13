import {SearchBar} from "../../component/SearchBar.jsx";
import {ShortBy} from "../../component/ShortBy.jsx";
import clinic from "../../assets/clinic.jpg";
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
							image={clinic}
							title="Find Your Local Clinic for Quality Care and Comprehensive Health Services"
							text="Discover a network of trusted clinics near you that offer a wide range of medical services, from routine check-ups to specialized treatments, ensuring you receive the best care tailored to your health needs."
						/>
				}
				<div>
					<ListClinics isLoading={isLoading} />
				</div>
			</section>
		</>
  );
}

export const Banner = ({image, title, text}) => {
	return (
		<div className="flex flex-col lg:flex-row-reverse lg:items-stretch gap-4 mb-4"
		>
			<div className="hidden lg:block bg-transparent">
				<img src={image} alt=""
						 className="w-full lg:w-[28rem] 2xl:w-full object-cover lg:rounded-[60px] bg rounded-lg h-full"/>
			</div>
			<div className="bg-white flex flex-col justify-between flex-1 min-h-full rounded-xl lg:rounded-xxl p-6 lg:p-10 2xl:p-16">
				<h1 className="font-semibold text-xl lg:text-4xl 2xl:text-5xl leading-8">
					{title}
				</h1>
				<p className="text-sm 2xl:text-xl">
					{text}
				</p>
			</div>
		</div>
	)
}