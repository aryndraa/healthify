import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
export const Explore = () => {
    const navigate = useNavigate()
    const { ref, inView } = useInView({ triggerOnce: true });
	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 100 }}
			animate={inView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 1}}
			className="max-w-[1680px] min-h-[706px] h-fit bg-[#213170] flex flex-col justify-center text-center p-[25px] rounded-[40px] mt-12 md:p=[62px] "
		>
			<div className=" flex flex-col gap-6  items-center justify-center align-middle mb-16">
				<p className="text--5xl font-semibold  text-white">
					Explore Our Services
				</p>
				<p className=" text--lg text-white max-w-[483px] ">
					The website that provide you best way to find information to
					improve your health decision
				</p>
			</div>

			<div className="grid grid-cols-1 min-[1024px]:grid-cols-2 2xl:grid-cols-4  gap-4 ">
				<div className="items">
					<div
						onClick={() => navigate("/pharmacy")}
						className="group relative w-[370px] min-h-[300px] min-[640px]:h-[400px]  bg-white rounded-[40px] overflow-hidden transition duration-300 hover:bg-[#213170] hover:shadow-xl hover:border-white hover:border-solid hover:border-[2px]  "
					>
						<div className="h-[200px] sm:h-[307px] justify-end flex rounded-[40px] transition-all duration-500 ease-in-out bg-Pharmacy group-hover:bg-none group-hover:transition-all ">
							<svg
								className="rounded-full p-[10px] w-[50px] h-[50px] md:w-[72px] md:h-[72px] md:p-[20px] m-4 transition-transform duration-300 group-hover:rotate-45"
								style={{
									backgroundColor: "white",
									border: "solid",
									borderColor: "#C5E5FF",
								}}
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
						<div className="absolute p-4 group-hover:mt-[-40px] transition-all duration-300">
							<p className=" text-start font-semibold text--2xl text-black transition duration-300 group-hover:text-white">
								Find Nearest Index
							</p>
							<p className="text-start  text-white opacity-0 transition duration-300 group-hover:opacity-100">
								Know more about disease, so you can self
								diagnose or just learning!
							</p>
						</div>
					</div>
				</div>
				<div className="items">
					<div
						onClick={() => navigate("/clinic")}
						className="group relative w-[370px] min-h-[300px] min-[640px]:h-[400px]  bg-white rounded-[40px] overflow-hidden transition duration-300 hover:bg-[#213170] hover:shadow-xl hover:border-white hover:border-solid hover:border-[2px]  "
					>
						<div className="h-[200px] sm:h-[307px] justify-end flex rounded-[40px] transition-all duration-500 ease-in-out bg-Clinic group-hover:bg-none group-hover:transition-all ">
							<svg
								className="rounded-full p-[10px] w-[50px] h-[50px] md:w-[72px] md:h-[72px] md:p-[20px] m-4 transition-transform duration-300 group-hover:rotate-45"
								style={{
									backgroundColor: "white",
									border: "solid",
									borderColor: "#C5E5FF",
								}}
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
						<div className="absolute p-5 group-hover:mt-[-40px] transition-all duration-300">
							<p className=" text-start font-semibold text--2xl text-black transition duration-300 group-hover:text-white">
								Find Nearest Clinic
							</p>
							<p className="text-start  text-white opacity-0 transition duration-300 group-hover:opacity-100">
								Know more about disease, so you can self
								diagnose or just learning!
							</p>
						</div>
					</div>
				</div>
				<div className="items">
					<div
						onClick={() => navigate("/drugs")}
						className="group relative w-[370px] min-h-[300px] min-[640px]:h-[400px]  bg-white rounded-[40px] overflow-hidden transition duration-300 hover:bg-[#213170] hover:shadow-xl hover:border-white hover:border-solid hover:border-[2px]  "
					>
						<div className="h-[200px] sm:h-[307px] justify-end flex rounded-[40px] transition-all duration-500 ease-in-out bg-Drugs group-hover:bg-none group-hover:transition-all ">
							<svg
								className="rounded-full p-[10px] w-[50px] h-[50px] md:w-[72px] md:h-[72px] md:p-[20px] m-4 transition-transform duration-300 group-hover:rotate-45"
								style={{
									backgroundColor: "white",
									border: "solid",
									borderColor: "#C5E5FF",
								}}
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
						<div className="absolute p-5 group-hover:mt-[-40px] transition-all duration-300">
							<p className=" text-start font-semibold text--2xl text-black transition duration-300 group-hover:text-white">
								Browse Drugs
							</p>
							<p className="text-start  text-white opacity-0 transition duration-300 group-hover:opacity-100">
								Know more about disease, so you can self
								diagnose or just learning!
							</p>
						</div>
					</div>
				</div>
				<div className="items">
					<div
						onClick={() => navigate("/disease")}
						className="group relative w-[370px] min-h-[300px] min-[640px]:h-[400px]  bg-white rounded-[40px] overflow-hidden transition duration-300 hover:bg-[#213170] hover:shadow-xl hover:border-white hover:border-solid hover:border-[2px]  "
					>
						<div className="h-[200px] sm:h-[307px] justify-end flex rounded-[40px] transition-all duration-500 ease-in-out bg-Disease group-hover:bg-none group-hover:transition-all ">
							<svg
								className="rounded-full p-[10px] w-[50px] h-[50px] md:w-[72px] md:h-[72px] md:p-[20px] m-4 transition-transform duration-300 group-hover:rotate-45"
								style={{
									backgroundColor: "white",
									border: "solid",
									borderColor: "#C5E5FF",
								}}
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
						<div className="absolute p-5 group-hover:mt-[-40px] transition-all duration-300">
							<p className=" text-start font-semibold text--2xl text-black transition duration-300 group-hover:text-white">
								Disease Information
							</p>
							<p className="text-start  text-white opacity-0 transition duration-300 group-hover:opacity-100">
								Know more about disease, so you can self
								diagnose or just learning!
							</p>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};
