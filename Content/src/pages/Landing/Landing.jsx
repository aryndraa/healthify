import Navbar from "../../component/navbar";
import IDemo from "../../assets/Demo.svg";
import patient from "../../assets/patient.png";
import pharmacy from "../../assets/Rectangle 70.svg";
import "../Landing/Landing.css";

const Landing = () => {
	return (
		<div>
			<Navbar />

			<div className="mt-9 max-w-screen flex gap-4">
				<div className="Container1 w-full ">
					<div className="item-1">
						<div>
							<p className=" font-semibold text-5xl">
								Where Health Meets Knowledge for a Brighter
								Future
							</p>
							<p className=" text-lg  mt-4 mb-6">
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
									<p>Nearest Pharmacy</p>
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
									<p>Nearest Clinic</p>
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
									<p>Read our Blogs</p>
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
									<p>BMI Calculator</p>
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
							alt=""
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
							alt=""
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
				</div>
			</div>

			<div
				className="max-w-[1680px] h-[500px] rounded-[40px] mt-4"
				style={{
					backgroundImage: `url(${IDemo})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			></div>
		</div>
	);
};

export default Landing;
