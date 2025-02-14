// CSS 
import "../Landing/Landing.css";
// Component 
import Navbar from "../../component/navbar";
import FAQ from "../../component/FAQ";
import Footer from "../../component/Footer";
// image assets 
import IDemo from "../../assets/Demo.svg";
import IDemo2 from "../../assets/idemo2.svg";
import IDemo3 from "../../assets/idemo3.svg";
import patient from "../../assets/patient.png";
import pharmacy from "../../assets/Rectangle 70.svg";
import Clinic from "../../assets/Rectangle 71.svg";
import Clinic2 from "../../assets/Rectangle 73.svg";
import Drugs from "../../assets/Rectangle 74.svg";
import Disease from "../../assets/Rectangle 75.svg";
import Jinx from "../../assets/Rectangle 76.svg";
import Dyven from "../../assets/Rectangle 77.svg";
import Blog1 from "../../assets/Ellipse 5-1.svg";
import Blog2 from "../../assets/Ellipse 5-2.svg";
import Blog3 from "../../assets/Ellipse 5.svg";

const Landing = () => {
	return (
		<div>
			<Navbar  />
			<div className=" max-w-screen flex gap-4 mt-[160px]">
				<div className="Container1 w-full ">
					<div className="item-1">
						<div>
							<p className=" font-semibold text-5xl ">
								Where Health Meets Knowledge for a Brighter
								Future
							</p>
							<p className=" text-lg  mt-4 mb-6 ">
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
									<p className="font-medium">
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
									<p className="font-medium">
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
									<p className="font-medium">
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
									<p className="font-medium">
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

						<p className="deskItem1  font-medium italic ">
							“Great health stems from great knowledge, as
							understanding our bodies and the factors that
							influence our well-being empowers us to make
							informed choices.”
						</p>
					</div>

					<div className="flex gap-4">
						<img
							src={IDemo}
							alt="particle image"
							width={250}
							className="rounded-[40px]"
						/>
						<div className="item-2">
							<p className=" font-semibold text-4xl">
								Our mision
							</p>
							<p className=" text-lg">
								Our mission is to empower individuals with
								accessible health information that promotes
								informed decision-making and enhances overall
								well-being.
							</p>
						</div>
					</div>
				</div>
				<div
					className="Container2 bg-cover bg-center rounded-[40px] w-screen "
					style={{ backgroundImage: `url(${IDemo})` }}
				></div>
			</div>
			<div className="flex gap-4">
				<div className="BOX">
					<div className="flex justify-between  mb-[71px]">
						<p className="text-4xl font-semibold w-1/2  ">
							Clinics Listed
						</p>
						<svg
							className=" rounded-full p-[20px] max-w-[72px] max-h-[72px]"
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
					<p className="text-[64px] font-semibold ">12K</p>
					<p className="text-[18px]  ">
						<strong className="">12K+</strong> Clinics have been
						listed into our services. Helping you find the perfect
						one
					</p>
				</div>
				<div className="BOX">
					<div className="flex justify-between  mb-[71px]">
						<p className="text-4xl font-semibold w-1/2  ">
							Supported Pharmacy
						</p>
						<svg
							className=" rounded-full p-[20px] max-w-[72px] max-h-[72px]"
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
					<p className="text-[64px] font-semibold ">16K</p>
					<p className="text-[18px]  ">
						<strong className="">12K+</strong> Pharmacys have been
						listed into our services. Helping you find the perfect
						one
					</p>
				</div>
				<div className="BOX">
					<div className="flex justify-between  mb-[71px]">
						<p className="text-4xl font-semibold w-1/2  ">
							Our Patient
						</p>
						<svg
							className=" rounded-full p-[20px] max-w-[72px] max-h-[72px] hidden"
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
						<p className="text-[18px]  ">
							Over <strong className="">200K+</strong> Patient we
							help to finding their best choice for healthy need
						</p>
					</div>
				</div>
				<div className="BOX flex flex-col justify-between">
					<div className="flex justify-between  mb-[71px]">
						<p className="text-4xl font-semibold w-1/2  ">
							Find More
						</p>
						<svg
							className=" rounded-full p-[20px] max-w-[72px] max-h-[72px]"
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
					{/* <p className="text-[64px] font-semibold ">12K</p> */}
					<p className="text-[18px]  ">
						Browse Disease or find drugs on your nearest pharmacy!
					</p>
				</div>
			</div>
			<div className="max-w-[1680px] max-h-[706px] bg-[#213170] flex flex-col justify-center text-center p-[62px] rounded-[40px] mt-12 ">
				<div className=" flex flex-col gap-6  items-center justify-center align-middle mb-16">
					<p className="text-[48px] font-semibold  text-white">
						Explore Our Services
					</p>
					<p className=" text-lg text-white max-w-[483px] ">
						The website that provide you best way to find
						information to improve your health decision
					</p>
				</div>
				<div className="flex gap-4">
					<div className="w-[370px] max-h-[400px]  bg-white rounded-[40px] ">
						<div
							className=" h-[307px] justify-end flex"
							style={{ backgroundImage: `url(${pharmacy})` }}
						>
							<svg
								className=" rounded-full p-[20px] max-w-[72px] max-h-[72px] m-4 "
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
						<p className="p-5 text-start font-semibold text-2xl">
							Find Nearest Pharmacy
						</p>
					</div>
					<div className="w-[370px] max-h-[400px]  bg-white rounded-[40px] ">
						<div
							className=" h-[307px] justify-end flex"
							style={{ backgroundImage: `url(${Clinic})` }}
						>
							<svg
								className=" rounded-full p-[20px] max-w-[72px] max-h-[72px] m-4 "
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
						<p className="p-5 text-start font-semibold text-2xl">
							Find Nearest Clinics
						</p>
					</div>
					<div className="w-[370px] max-h-[400px]  bg-white rounded-[40px] ">
						<div
							className=" h-[307px] justify-end flex"
							style={{ backgroundImage: `url(${Drugs})` }}
						>
							<svg
								className=" rounded-full p-[20px] max-w-[72px] max-h-[72px] m-4 "
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
						<p className="p-5 text-start font-semibold text-2xl">
							Browse Drugs
						</p>
					</div>
					<div className="w-[370px] max-h-[400px]  bg-white rounded-[40px] ">
						<div
							className=" h-[307px] justify-end flex"
							style={{ backgroundImage: `url(${Disease})` }}
						>
							<svg
								className=" rounded-full p-[20px] max-w-[72px] max-h-[72px] m-4 "
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
						<p className="p-5 text-start font-semibold text-2xl">
							Disease Information
						</p>
					</div>
				</div>
			</div>
			<div
				className="max-w-[1680px] h-[500px] rounded-[40px] mt-4"
				style={{
					backgroundImage: `url(${IDemo2})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			></div>
			<div className="flex gap-4 mt-12">
				<div className="BOX2 bg-[#213170] flex flex-col h-screen justify-between">
					<div className="flex flex-col gap-4">
						<div className="flex justify-between ">
							<p className="text-5xl font-semibold text-white ">
								Explore Clinics Nearby
							</p>
							<svg
								className=" rounded-full p-[20px] max-w-[72px] max-h-[72px]"
								style={{ backgroundColor: "white" }}
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
						<p className="text-white text-lg">
							Need medical checkup?, we make it easy to find
							nearby clinics for you
						</p>
					</div>
					<div className="text-end">
						<p className="text-[64px] font-semibold text-white">
							12K+
						</p>
						<p className=" text-[18px] text-white">
							Clinics near you!
						</p>
					</div>
				</div>
				<div
					className="BOX2  flex flex-col h-screen w-screen justify-between"
					style={{
						backgroundImage: `url(${Clinic2})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				>
					<svg
						className=" rounded-full p-[20px] max-w-[72px] max-h-[72px] self-end"
						style={{ backgroundColor: "white" }}
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
					<div className="flex  bg-white rounded-[40px] p-[22px]  items-center justify-between">
						<div>
							<p className="text-2xl font-semibold">
								Mahardika's Clinics
							</p>
							<p className="text-base">Dental Clinics</p>
						</div>
						<div>
							<p className="text-[32px] font-medium">2KM</p>
						</div>
					</div>
				</div>
				<div
					className="BOX2  flex flex-col bg-slate-500 h-screen w-screen justify-between"
					// style={{
					// 	backgroundImage: `url(${Clinic2})`,
					// 	backgroundSize: "cover",
					// 	backgroundPosition: "center",
					// }}
				>
					<svg
						className=" rounded-full p-[20px] max-w-[72px] max-h-[72px] self-end"
						style={{ backgroundColor: "white" }}
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
					<div className="flex  bg-white rounded-[40px] p-[22px]  items-center justify-between">
						<div>
							<p className="text-2xl font-semibold">
								Vaelrino Clinics & Medics
							</p>
							<p className="text-base">Cardiology Clinics</p>
						</div>
						<div>
							<p className="text-[32px] font-medium">2KM</p>
						</div>
					</div>
				</div>
			</div>
			<div className="flex  flex-row-reverse gap-4 my-12">
				<div className="BOX2 bg-[#C5E5FF] flex flex-col h-screen justify-between">
					<div className="flex flex-col gap-4">
						<div className="flex justify-between ">
							<p className="text-5xl font-semibold  ">
								Explore Nearest Pharmacy
							</p>
							<svg
								className=" rounded-full p-[20px] max-w-[72px] max-h-[72px]"
								style={{ backgroundColor: "white" }}
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
						<p className="text-lg">
							Need a quick drugs or herbal?, Discover more listed
							pharmacy near you
						</p>
					</div>
					<div className="text-end">
						<p className="text-[64px] font-semibold">3K+</p>
						<p className=" text-[18px] ">Pharmacy near you!</p>
					</div>
				</div>
				<div
					className="BOX2  flex flex-col h-screen w-screen justify-between"
					style={{
						backgroundImage: `url(${Jinx})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				>
					<svg
						className=" rounded-full p-[20px] max-w-[72px] max-h-[72px] self-end"
						style={{ backgroundColor: "white" }}
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
					<div className="flex  bg-white rounded-[40px] p-[22px]  items-center justify-between">
						<div>
							<p className="text-2xl font-semibold">
								Jinx Pharmacy
							</p>
							<p className="text-base">Hospital Pharmacy</p>
						</div>
						<div>
							<p className="text-[32px] font-medium">2KM</p>
						</div>
					</div>
				</div>
				<div
					className="BOX2  flex flex-col h-screen w-screen justify-between"
					style={{
						backgroundImage: `url(${Dyven})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				>
					<svg
						className=" rounded-full p-[20px] max-w-[72px] max-h-[72px] self-end"
						style={{ backgroundColor: "white" }}
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
					<div className="flex  bg-white rounded-[40px] p-[22px]  items-center justify-between">
						<div>
							<p className="text-2xl font-semibold">
								Dyven Pharmacy
							</p>
							<p className="text-base">Pharmacy</p>
						</div>
						<div>
							<p className="text-[32px] font-medium">2KM</p>
						</div>
					</div>
				</div>
			</div>

			{/* blog content container  */}
			<div className=" flex flex-col gap-4">
				<div className=" flex justify-between p-8 bg-white rounded-[40px] items-center">
					<p className="text-5xl font-semibold">Explore Our Blogs</p>
					<svg
						className=" rounded-full p-[20px] max-w-[72px] max-h-[72px]"
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

				<div className="flex gap-4">
					{/* blog content 1  */}
					<div className="BLOG bg-white h-screen flex flex-col justify-between">
						<div className="flex  justify-between">
							<div className="flex gap-4">
								<p className="Tag text-whi">Health</p>
								<p className="Tag ">Disease</p>
							</div>
							<img
								src={Blog3}
								alt="Blog timoni image"
								height={140}
							/>
						</div>
						<div className="Blog-Content flex flex-col gap-4">
							<p className="text-2xl font-semibold">
								This is why you always open incognito tabs at
								night
							</p>
							<p className="text-lg">
								Market important all turn accountable like cc
								didn't. Turn dog commitment engagement
								contribution book silently I container.
								Competitors procrastinating unpack marginalised
								company please.{" "}
							</p>
						</div>
					</div>
					{/* blog content 2 */}
					<div className="BLOG bg-white h-screen flex flex-col justify-between">
						<div className="flex  justify-between">
							<div className="flex gap-4">
								<p className="Tag text-whi">Health</p>
								<p className="Tag ">Disease</p>
							</div>
							<img
								src={Blog2}
								alt="Blog timoni image"
								height={140}
							/>
						</div>
						<div className="Blog-Content flex flex-col gap-4">
							<p className="text-2xl font-semibold">
								New virus Nvidia 5090 make gamers broke
							</p>
							<p className="text-lg">
								Market important all turn accountable like cc
								didn't. Turn dog commitment engagement
								contribution book silently I container.
								Competitors procrastinating unpack marginalised
								company please.{" "}
							</p>
						</div>
					</div>
					{/* blog content 3  */}
					<div className="BLOG bg-white h-screen flex flex-col justify-between">
						<div className="flex  justify-between">
							<div className="flex gap-4">
								<p className="Tag text-whi">Health</p>
								<p className="Tag ">Disease</p>
							</div>
							<img
								src={Blog1}
								alt="Blog timoni image"
								height={140}
							/>
						</div>
						<div className="Blog-Content flex flex-col gap-4">
							<p className="text-2xl font-semibold">
								Cheat code to boost your immune (100% Legit)
							</p>
							<p className="text-lg">
								Market important all turn accountable like cc
								didn't. Turn dog commitment engagement
								contribution book silently I container.
								Competitors procrastinating unpack marginalised
								company please.{" "}
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-[34px] mb-[30px] flex gap-4">
				<FAQ />
				<div
					className="Container2 bg-cover bg-center rounded-[40px] w-[690px]"
					style={{ backgroundImage: `url(${IDemo3})` }}
				></div>
			</div>

			<Footer />
		</div>
	);
};

export default Landing;
