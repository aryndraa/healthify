import patient from "../../assets/patient.png";

export const Feature = () => {
	return (
		<div className="grid grid-cols-1 min-[1024px]:grid-cols-2 2xl:grid-cols-4 gap-4 ">
			<div className="items hover:cursor-pointer group">
				<div className="BOX">
					<div className="flex justify-between  mb-[71px]   ">
						<p className="text--4xl font-semibold w-1/2  ">
							Clinics Listed
						</p>
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
					<p className="text--7xl font-semibold ">12K</p>
					<p className="text--lg  ">
						<strong className="">12K+</strong> Clinics have been
						listed into our services. Helping you find the perfect
						one
					</p>
				</div>
			</div>

			<div className="items hover:cursor-pointer group">
				<div className="BOX">
					<div className="flex justify-between  mb-[71px]">
						<p className="text--4xl font-semibold w-1/2  ">
							Supported Pharmacy
						</p>
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
					<p className="text--7xl font-semibold ">16K</p>
					<p className="text--lg  ">
						<strong className="">12K+</strong> Pharmacys have been
						listed into our services. Helping you find the perfect
						one
					</p>
				</div>
			</div>

			<div className="items ">
				<div className="BOX">
					<div className="flex justify-between  mb-[71px]">
						<p className="text--4xl font-semibold w-1/2  ">
							Our Patient
						</p>
						<svg
							className=" rounded-full p-[10px] w-[50px] h-[50px] md:w-[72px] md:h-[72px] md:p-[20px] hidden"
							style={{ backgroundColor: "#C5E5FF" }}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path
								fill="currentColor"
								fillRule="evenodd"
								d="M9 6.75a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V7.81L6.53 18.53a.75.75 0 0 1-1.06-1.06L16.19 6.75z"
								clipRule="evenodd"
							></path>
						</svg>
					</div>

					<div className=" flex flex-col justify-between">
						<img
							src={patient}
							alt="patient image"
							width={200}
							style={{ backgroundColor: "white" }}
							className="my-4"
						/>
						<p className="text--lg  ">
							Over <strong className="">200K+</strong> Patient we
							help to finding their best choice for healthy need
						</p>
					</div>
				</div>
			</div>

			<div className="items hover:cursor-pointer group">
				<div className="BOX flex flex-col justify-between">
					<div className="flex justify-between  mb-[71px]">
						<p className="text--4xl font-semibold w-1/2  ">
							Find More
						</p>
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
					<p className="text--lg  ">
						Browse Disease or find drugs on your nearest pharmacy!
					</p>
				</div>
			</div>
		</div>
	);
};
