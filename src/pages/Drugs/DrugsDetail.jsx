import { useParams } from "react-router-dom";
import { drugData } from "./drugsdta";
import { DrugCard } from "../../component/Drugs/Drug";
import { useNavigate } from "react-router-dom";

export function DrugDetail() {
	const navigate= useNavigate()
	const { id } = useParams();
	const drug = drugData.find((item) => item.id === parseInt(id));


	  const randomNavigate = () => {
			const randomNumber = Math.floor(Math.random() * 17) + 1;
			navigate(`/pharmacy/${randomNumber}`);
		};

		const randomDrugs = drugData
				.filter((b) => b.id !== parseInt(id)) 
				.sort(() => Math.random() - 0.5) 
				.slice(0, 4); 

	if (!drug) {
		return (
			<div className="min-h-screen  mb-4" >
				<h1 className="text-center text-2xl font-bold">
					Obat tidak ditemukan
				</h1>
			</div>
		);
	}

	return (
		<div className="min-h-screen  mb-4">
			<div className="flex flex-col 2xl:flex-row gap-4  justify-center items-center 2xl:items-start">
				<div className="max-w-[549px] 2xl:min-w-[549px] ">
					<div className="flex justify-between items-center bg-white rounded-[40px] p-12  ">
						<div className=" flex flex-col ">
							<h2 className="font-semibold text--5xl">
								{drug.title}
							</h2>
							<p className="text-gray-600 text--lg">
								{drug.standFor}
							</p>
						</div>
						<div>
							<img
								src={drug.drugLevel}
								alt="Drug Level"
								className="w-12 mt-2"
							/>
						</div>
					</div>
					<div
						className="rounded-[40px] py-4 px-2 max-w-[549px] h-[250px] md:h-[549px] bg-no-repeat bg-center md:bg-cover"
						style={{
							backgroundImage: `url(${drug.ilustration})`,
						}}
					/>
					<div className="flex items-center justify-center bg-[#213170] text-white gap-4 py-8 px-4 rounded-[32px] " onClick={randomNavigate}>
						<p className="font-medium text--2xl">
							Find In Nearest Pharmacy
						</p>
						<svg
							className=""
							xmlns="http://www.w3.org/2000/svg"
							width={24}
							height={24}
							viewBox="0 0 24 24"
						>
							<path
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={1.5}
								d="M4 12h16m0 0l-6-6m6 6l-6 6"
							></path>
						</svg>
					</div>
				</div>
				<div className="bg-white rounded-[40px] p-12">
					<p className="text--lg text-gray-500">{drug.description}</p>
					<br />
					<p className="text--xl font-semibold"> komposisi</p>
					{drug.composition.map((item, index) => (
						<li className="text-gray-500 text--lg" key={index}>
							{" "}
							{item}{" "}
						</li>
					))}
					<br />
					<p className="text--xl font-semibold"> Cara Penggunaan</p>
					<ul className="list-disc ml-5">
						{drug.usage.map((item, index) => (
							<li
								className="font-bold text--lg text-gray-500"
								key={index}
							>
								{item}
							</li>
						))}
					</ul>
					<br />
					<p className="text--xl font-semibold"> Efek Samping</p>
					{drug.sideEffects.map((item, index) => (
						<li className="text-gray-500 text--lg" key={index}>
							{item}
						</li>
					))}
					<br />
					<p className="text--xl text-gray-500 ">
						<strong>Informasi BPOM dan Produsen: </strong>
						{drug.bpomInfo}
					</p>

					<br />
					<p className="text--xl font-semibold text-gray-500">
						Perhatian:
					</p>
					{drug.precautions.map((item, index) => (
						<li className="text-gray-500 text--lg" key={index}>
							{item}
						</li>
					))}
					<br />
					<p className="text--xl text-gray-500">
						{drug.additionalInfo}
					</p>
				</div>
			</div>
			<div className="mt-[256px]">
				<div className=" flex justify-between py-[32px] px-[48px] bg-white rounded-[40px] items-center gap-2 group " onClick={()=> navigate("/drugs")}>
					<p className="text--5xl font-semibold">More Drugs</p>
					<svg
						className="rounded-full p-[10px] w-[50px] h-[50px] md:w-[72px] md:h-[72px] md:p-[20px]  transition-transform duration-300 bg-[#C5E5FF]  group-hover:border-solid group-hover:border-[#C5E5FF]  group-hover:border-[3px] group-hover:rotate-45  group-hover:bg-[#213170] "
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
					>
						<path
							fill="black"
							className=" group-hover:fill-[#C5E5FF]"
							fillRule="evenodd"
							d="M9 6.75a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V7.81L6.53 18.53a.75.75 0 0 1-1.06-1.06L16.19 6.75z"
							clipRule="evenodd"
						></path>
					</svg>
				</div>
				<div className="w-full grid gap-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 mt-4">
					{randomDrugs.map((drug) => (
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
		</div>
	);
}