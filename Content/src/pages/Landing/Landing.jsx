
// CSS
import "../Landing/Landing.css";
// Component
import FAQ from "../../component/FAQ";
// image assets
import IDemo from "../../assets/Demo.svg";
import IDemo2 from "../../assets/idemo2.svg";
import IDemo3 from "../../assets/idemo3.svg";
import patient from "../../assets/patient.png";
import Blog1 from "../../assets/Ellipse 5-1.svg";
import Blog2 from "../../assets/Ellipse 5-2.svg";
import Blog3 from "../../assets/Ellipse 5.svg";

const Landing = () => {
	return (
		<div>
			{/* Hero  */}
			<div className=" max-w-screen flex gap-4 mt-[100px]  sm:mt-[160px]">
				<div className="Container1">
					<div className="item-1">
						<div>
							<p className=" font-semibold text--5xl ">
								Where Health Meets Knowledge for a Brighter
								Future
							</p>
							<p className=" text--lg  mt-4 mb-6 ">
								Explore a wealth of resources designed to
								empower you with the knowledge you need to make
								informed health decisions. From understanding
								medications and diseases to finding local
								healthcare services, we are dedicated to
								supporting your journey towards a healthier,
								happier life.
							</p>

							<div className=" flex flex-wrap gap-4">
								<div className="Button  ">
									<p className="font-medium text--lg">
										Nearest Pharmacy
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
								<div className="Button   ">
									<p className="font-medium text--lg">
										Nearest Clinic
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
								<div className="Button ">
									<p className="font-medium text--lg">
										Read our Blogs
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
								<div className="Button ">
									<p className="font-medium text--lg">
										BMI Calculator
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
						</div>

						<p className="deskItem1  font-medium italic text--lg ">
							“Great health stems from great knowledge, as
							understanding our bodies and the factors that
							influence our well-being empowers us to make
							informed choices.”
						</p>
					</div>

					{/* item 2  */}
					<div className="hidden  sm:flex  gap-4 ">
						<img
							src={IDemo}
							alt="particle image"
							width={250}
							className="rounded-[40px] max-[1550px]:hidden"
						/>
						<div className="item-2 justify-center ">
							<p className=" font-semibold text--4xl">
								Our mision
							</p>
							<p className=" text--lg">
								Our mission is to empower individuals with
								accessible health information that promotes
								informed decision-making and enhances overall
								well-being.
							</p>
						</div>
					</div>
				</div>
				{/* item 3 */}
				<div
					className="Container2 max-[1550px]:hidden bg-cover bg-center rounded-[40px] w-screen "
					style={{ backgroundImage: `url(${IDemo})` }}
				></div>
			</div>

			<div className="flex flex-wrap gap-4 justify-center">
				<div className="BOX">
					<div className="flex justify-between  mb-[71px]">
						<p className="text--4xl font-semibold w-1/2  ">
							Clinics Listed
						</p>
						<svg
							className="rounded-full p-[10px] w-[50px] h-[50px] md:w-[72px] md:h-[72px] md:p-[20px]"
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
					<p className="text--7xl font-semibold ">12K</p>
					<p className="text--lg  ">
						<strong className="">12K+</strong> Clinics have been
						listed into our services. Helping you find the perfect
						one
					</p>
				</div>
				<div className="BOX">
					<div className="flex justify-between  mb-[71px]">
						<p className="text--4xl font-semibold w-1/2  ">
							Supported Pharmacy
						</p>
						<svg
							className=" rounded-full p-[10px] w-[50px] h-[50px] md:w-[72px] md:h-[72px] md:p-[20px]"
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
					<p className="text--7xl font-semibold ">16K</p>
					<p className="text--lg  ">
						<strong className="">12K+</strong> Pharmacys have been
						listed into our services. Helping you find the perfect
						one
					</p>
				</div>
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
				<div className="BOX flex flex-col justify-between">
					<div className="flex justify-between  mb-[71px]">
						<p className="text--4xl font-semibold w-1/2  ">
							Find More
						</p>
						<svg
							className=" rounded-full p-[10px] w-[50px] h-[50px] md:w-[72px] md:h-[72px] md:p-[20px]"
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
					{/* <p className="text--7xl font-semibold ">12K</p> */}
					<p className="text--lg  ">
						Browse Disease or find drugs on your nearest pharmacy!
					</p>
				</div>
			</div>

			{/* explore content  */}
			<div className="max-w-[1680px] min-h-[706px] h-fit bg-[#213170] flex flex-col justify-center text-center p-[25px] rounded-[40px] mt-12 md:p=[62px] ">
				<div className=" flex flex-col gap-6  items-center justify-center align-middle mb-16">
					<p className="text--5xl font-semibold  text-white">
						Explore Our Services
					</p>
					<p className=" text--lg text-white max-w-[483px] ">
						The website that provide you best way to find
						information to improve your health decision
					</p>
				</div>

				<div className="flex flex-wrap justify-center gap-4">
					<div className="group relative w-[370px] min-h-[300px] min-[640px]:h-[400px]  bg-white rounded-[40px] overflow-hidden transition duration-300 hover:bg-[#213170] hover:shadow-xl">
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
						<div className="absolute p-5 group-hover:mt-[-40px] transition-all duration-300">
							<p className=" text-start font-semibold text--2xl text-black transition duration-300 group-hover:text-white">
								Find Nearest Pharmacy
							</p>
							<p className="text-start  text-white opacity-0 transition duration-300 group-hover:opacity-100">
								Know more about disease, so you can self
								diagnose or just learning!
							</p>
						</div>
					</div>

					<div className="group relative w-[370px] min-h-[300px] min-[640px]:h-[400px]  bg-white rounded-[40px] overflow-hidden transition duration-300 hover:bg-[#213170] hover:shadow-xl">
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

					<div className="group relative w-[370px] min-h-[300px] min-[640px]:h-[400px]  bg-white rounded-[40px] overflow-hidden transition duration-300 hover:bg-[#213170] hover:shadow-xl">
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

					<div className="group relative w-[370px] min-h-[300px] min-[640px]:h-[400px]  bg-white rounded-[40px] overflow-hidden transition duration-300 hover:bg-[#213170] hover:shadow-xl">
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

			{/* image after explore  */}
			<div
				className="max-w-[1680px] h-[500px] rounded-[40px] mt-4 hidden xl:block"
				style={{
					backgroundImage: `url(${IDemo2})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			></div>

			{/* explore clinic and pharmacy  */}
			<div>
				<div className="flex flex-wrap justify-center gap-4 mt-12">
					<div className="BOX2 bg-[#213170] flex flex-col h-screen justify-between p-5 group ">
						<div className="flex flex-col gap-4">
							<div className="flex justify-between ">
								<p className="text--5xl font-semibold text-white  ">
									Explore Clinics Nearby
								</p>
								<svg
									className="rounded-full p-[10px] w-[50px] h-[50px] md:w-[72px] md:h-[72px] md:p-[20px]  transition-transform duration-300 bg-white  group-hover:border-solid group-hover:border-[#C5E5FF]  group-hover:border-[3px] group-hover:rotate-45  group-hover:bg-[#213170]"
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
							<p className="text-white text--lg">
								Need medical checkup?, we make it easy to find
								nearby clinics for you
							</p>
						</div>
						<div className="text-end">
							<p className="text--7xl font-semibold text-white">
								12K+
							</p>
							<p className=" text--lg text-white">
								Clinics near you!
							</p>
						</div>
					</div>

					<div className="BOX2  flex flex-col h-screen w-screen justify-between bg-Clinic2 bg-cover  ">
						<div className="p-5 flex flex-col justify-between h-screen hover:bg-blue-300 hover:bg-opacity-40 rounded-[40px] group">
							<svg
								className="rounded-full p-[10px] w-[50px] h-[50px] md:w-[72px] md:h-[72px] md:p-[20px] self-end transition-transform duration-300 bg-white  group-hover:border-solid group-hover:border-[#C5E5FF]  group-hover:border-[3px] group-hover:rotate-45  group-hover:bg-[#213170]"
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
							<div className="flex flex-col gap-6 bg-white rounded-[40px] p-[22px]">
								<div className="flex items-center justify-between">
									<div>
										<p className="text-2xl font-semibold">
											Mahardika&apos;s Clinics
										</p>
										<p className="text-base">
											Dental Clinics
										</p>
									</div>
									<div>
										<p className="text-2xl font-medium">
											2KM
										</p>
									</div>
								</div>
								{/* Bagian ini hanya muncul saat di hover */}
								<p className="text-lg font-medium hidden transition-all duration-300 group-hover:block">
									“Mahardika Clinics is one of the premier
									dental clinics located in East Denpasar.”
								</p>
							</div>
						</div>
					</div>

					<div className="BOX2  flex flex-col h-screen w-screen justify-between bg-slate-400 bg-cover  ">
						<div className="p-5 flex flex-col justify-between h-screen hover:bg-blue-300 hover:bg-opacity-40 rounded-[40px] group">
							<svg
								className="rounded-full p-[10px] w-[50px] h-[50px] md:w-[72px] md:h-[72px] md:p-[20px] self-end transition-transform duration-300 bg-white  group-hover:border-solid group-hover:border-[#C5E5FF]  group-hover:border-[3px] group-hover:rotate-45  group-hover:bg-[#213170]"
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
							<div className="flex flex-col gap-6 bg-white rounded-[40px] p-[22px]">
								<div className="flex items-center justify-between">
									<div>
										<p className="text-2xl font-semibold">
											Vaelrino Clinics & Medics
										</p>
										<p className="text-base">
											Cardiology Clinic
										</p>
									</div>
									<div>
										<p className="text-2xl font-medium">
											2KM
										</p>
									</div>
								</div>
								{/* Bagian ini hanya muncul saat di hover */}
								<p className="text-lg font-medium hidden transition-all duration-300 group-hover:block">
									“Vaelrino Clinics & Medics is one of the
									premier Cardiology Clinic located in South
									Denpasar.”
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-wrap justify-center flex-row-reverse gap-4 my-12">
					<div className="BOX2 bg-[#C5E5FF] flex flex-col h-screen justify-between p-5 group ">
						<div className="flex flex-col gap-4">
							<div className="flex justify-between ">
								<p className="text--5xl font-semibold  ">
									Explore Nearest Pharmacy
								</p>
								<svg
									className="rounded-full p-[10px] w-[50px] h-[50px] md:w-[72px] md:h-[72px] md:p-[20px]  transition-transform duration-300 bg-white  group-hover:border-solid group-hover:border-[#C5E5FF]  group-hover:border-[3px] group-hover:rotate-45  group-hover:bg-[#213170]"
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
							<p className=" text--lg">
								Need a quick drugs or herbal?, Discover more
								listed pharmacy near you
							</p>
						</div>
						<div className="text-end">
							<p className="text--7xl font-semibold ">3K+</p>
							<p className=" text--lg ">Pharmacy near you!</p>
						</div>
					</div>

					<div className="BOX2  flex flex-col h-screen w-screen justify-between bg-Jinx bg-cover  ">
						<div className="p-5 flex flex-col justify-between h-screen hover:bg-blue-300 hover:bg-opacity-40 rounded-[40px] group">
							<svg
								className="rounded-full p-[10px] w-[50px] h-[50px] md:w-[72px] md:h-[72px] md:p-[20px] self-end transition-transform duration-300 bg-white  group-hover:border-solid group-hover:border-[#C5E5FF]  group-hover:border-[3px] group-hover:rotate-45  group-hover:bg-[#213170]"
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
							<div className="flex flex-col gap-6 bg-white rounded-[40px] p-[22px]">
								<div className="flex items-center justify-between">
									<div>
										<p className="text-2xl font-semibold">
											Hospital Pharmacy
										</p>
										<p className="text-base">
											Hospital Pharmacy
										</p>
									</div>
									<div>
										<p className="text-2xl font-medium">
											2KM
										</p>
									</div>
								</div>
								{/* Bagian ini hanya muncul saat di hover */}
								<p className="text-lg font-medium hidden transition-all duration-300 group-hover:block">
									“Hospital Pharmacy is one of the premier
									Hospital Pharmacy located in East Denpasar.”
								</p>
							</div>
						</div>
					</div>

					<div className="BOX2  flex flex-col h-screen w-screen justify-between bg-Dyven bg-cover  ">
						<div className="p-5 flex flex-col justify-between h-screen hover:bg-blue-300 hover:bg-opacity-40 rounded-[40px] group">
							<svg
								className="rounded-full p-[10px] w-[50px] h-[50px] md:w-[72px] md:h-[72px] md:p-[20px] self-end transition-transform duration-300 bg-white  group-hover:border-solid group-hover:border-[#C5E5FF]  group-hover:border-[3px] group-hover:rotate-45  group-hover:bg-[#213170]"
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
							<div className="flex flex-col gap-6 bg-white rounded-[40px] p-[22px]">
								<div className="flex items-center justify-between">
									<div>
										<p className="text-2xl font-semibold">
											Dyven Pharmacy
										</p>
										<p className="text-base">Pharmacy</p>
									</div>
									<div>
										<p className="text-2xl font-medium">
											2KM
										</p>
									</div>
								</div>
								{/* Bagian ini hanya muncul saat di hover */}
								<p className="text-lg font-medium hidden transition-all duration-300 group-hover:block">
									“ Dyven Pharmacy & Medics is one of the
									premier Pharmacy located in South Denpasar.”
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* blog content container  */}
			<div className=" flex  flex-col gap-4">
				<div className=" flex justify-between py-[32px] px-[48px] bg-white rounded-[40px] items-center gap-2">
					<p className="text--5xl font-semibold">Explore Our Blogs</p>
					<svg
						className=" rounded-full p-[10px] w-[50px] h-[50px] md:w-[72px] md:h-[72px] md:p-[20px]"
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

				<div className="flex flex-wrap justify-center gap-4">
					{/* blog content 1  */}
					<div className="BLOG bg-white h-screen flex flex-col justify-between">
						<div className="flex flex-col gap-6 justify-between lg:flex-row">
							<div className="flex gap-4">
								<p className="Tag text-whi">Health</p>
								<p className="Tag ">Disease</p>
							</div>
							<img
								className="w-24 sm:w-[120px] h-auto"
								src={Blog3}
								alt="Blog timoni image"
							/>
						</div>
						<div className="Blog-Content flex flex-col gap-4">
							<p className="text--2xl font-semibold">
								This is why you always open incognito tabs at
								night
							</p>
							<p className="text--lg">
								Market important all turn accountable like cc
								didn&apos;t. Turn dog commitment engagement
								contribution book silently I container.
								Competitors procrastinating unpack marginalised
								company please.{" "}
							</p>
						</div>
					</div>
					{/* blog content 2 */}
					<div className="BLOG bg-white h-screen flex flex-col justify-between">
						<div className="flex flex-col gap-6 justify-between lg:flex-row">
							<div className="flex gap-4">
								<p className="Tag text-whi">Health</p>
								<p className="Tag ">Disease</p>
							</div>
							<img
								className="w-24 sm:w-[120px] h-auto"
								src={Blog2}
								alt="Blog timoni image"
								height={140}
							/>
						</div>
						<div className="Blog-Content flex flex-col gap-4">
							<p className="text--2xl font-semibold">
								New virus Nvidia 5090 make gamers broke
							</p>
							<p className="text--lg">
								Market important all turn accountable like cc
								didn&apos;t. Turn dog commitment engagement
								contribution book silently I container.
								Competitors procrastinating unpack marginalised
								company please.{" "}
							</p>
						</div>
					</div>
					{/* blog content 3  */}
					<div className="BLOG bg-white h-screen flex flex-col justify-between">
						<div className="flex flex-col gap-6 justify-between lg:flex-row">
							<div className="flex gap-4">
								<p className="Tag text-whi">Health</p>
								<p className="Tag ">Disease</p>
							</div>
							<img
								className="w-24 sm:w-[120px] h-auto"
								src={Blog1}
								alt="Blog timoni image"
								height={140}
							/>
						</div>
						<div className="Blog-Content flex flex-col gap-4">
							<p className="text--2xl font-semibold">
								Cheat code to boost your immune (100% Legit)
							</p>
							<p className="text--lg">
								Market important all turn accountable like cc
								didn&apos;t. Turn dog commitment engagement
								contribution book silently I container.
								Competitors procrastinating unpack marginalised
								company please.{" "}
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Faq content  */}
			<div className="mt-[34px] mb-[30px] flex gap-4">
				<FAQ />
				<div
					className="Container2 max-[1550px]:hidden bg-cover bg-center rounded-[40px] w-[690px]"
					style={{ backgroundImage: `url(${IDemo3})` }}
				></div>
			</div>
		</div>
	);
};

export default Landing;
