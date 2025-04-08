import patient from "../../assets/patient.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Feature = () => {
	const { ref, inView } = useInView({ triggerOnce: true });
	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 100 }}
			animate={inView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 1}}
			className="grid grid-cols-1 min-[1024px]:grid-cols-2 2xl:grid-cols-4 gap-4 "
		>
			<div className="items   group hover">
				<div className="BOX hover:bg-[#213170] hover:text-white  transition-all duration-300">
					<div className="flex justify-between  mb-[71px]   ">
						<p className="text--4xl font-semibold w-1/2  ">
							Clinics Listed
						</p>
						<svg
							className="rounded-full p-[10px] w-[50px] h-[50px] md:w-[72px] md:h-[72px] md:p-[20px]  transition-transform duration-300 bg-[#C5E5FF]  group-hover:border-solid group-hover:border-[#C5E5FF]  group-hover:border-[3px] group-hover:rotate-45  group-hover:bg-white "
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path
								fill="black"
								className=" group-hover:fill-[#213170]"
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

			<div className="items   group">
				<div className="BOX hover:bg-[#213170] hover:text-white  transition-all duration-300">
					<div className="flex justify-between  mb-[71px]">
						<p className="text--4xl font-semibold w-1/2  ">
							Supported Pharmacy
						</p>
						<svg
							className="rounded-full p-[10px] w-[50px] h-[50px] md:w-[72px] md:h-[72px] md:p-[20px]  transition-transform duration-300 bg-[#C5E5FF]  group-hover:border-solid group-hover:border-[#C5E5FF]  group-hover:border-[3px] group-hover:rotate-45  group-hover:bg-white "
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path
								fill="black"
								className=" group-hover:fill-[#213170]"
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

			<div className="items   group">
				<div className="BOX hover:bg-[#213170] hover:text-white  transition-all duration-300 flex flex-col justify-between">
					<div className="flex justify-between  mb-[71px]">
						<p className="text--4xl font-semibold w-1/2  ">
							Find More
						</p>
						<svg
							className="rounded-full p-[10px] w-[50px] h-[50px] md:w-[72px] md:h-[72px] md:p-[20px]  transition-transform duration-300 bg-[#C5E5FF]  group-hover:border-solid group-hover:border-[#C5E5FF]  group-hover:border-[3px] group-hover:rotate-45  group-hover:bg-white "
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path
								fill="black"
								className=" group-hover:fill-[#213170]"
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
		</motion.div>
	);
};
