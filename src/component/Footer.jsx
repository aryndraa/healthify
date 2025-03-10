import heal from "../assets/logo-white.svg";

const Footer = () => {
	return (
		<footer className="bg-[#213170] text-white p-10 sm:p-16 rounded-[40px]">
			<div className="container mx-auto flex justify-between max-[1280px]:justify-start ">
				<div className=" hidden max-w-[536px] xl:flex flex-col gap-12">
					<div>
						<img src={heal} alt=" healthify logo" />
						<p className="max-w-[506px]">
							We provide accessible health information to empower
							informed decisions and enhance well-being.
						</p>
					</div>

					<div className="flex flex-col gap-6">
						<div>
							<p className="text-xl">company</p>
							<p className="text--38 font-semibold">
								Healthify.inc Health Information Center
							</p>
						</div>

						<div>
							<p className="text-xl">Explore</p>
							<p className="text--38 font-semibold">
								Disease Information, Drugs Library, Pharmacy &
								Clinics
							</p>
						</div>
					</div>
				</div>

				<div>
					<div className="min-w-[200px] min-[1440px]:w-[652px]">
						<div className="flex justify-between items-center mb-6">
							<p className="text--38 font-semibold">
								Enter Your Email
							</p>
							<div className="bg-[#C5E5FF] w-fit p-4 rounded-full">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width={15}
									height={15}
									viewBox="0 0 15 15"
								>
									<path
										fill="black"
										fillRule="evenodd"
										d="M8.146 3.146a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L11.293 8H2.5a.5.5 0 0 1 0-1h8.793L8.146 3.854a.5.5 0 0 1 0-.708"
										clipRule="evenodd"
									></path>
								</svg>
							</div>
						</div>
						<hr className="border-t border-gray-100 opacity-35" />
					</div>
					<div className="flex flex-col  gap-16 pt-16 sm:flex sm:flex-row ">
						<ul className="">
							<li>
								<p className="text--2xl font-semibold">Pages</p>
							</li>
							<li>
								<a href="" className="opacity-35">
									Home
								</a>
							</li>
							<li>
								<a href="" className="opacity-35">
									Disease
								</a>
							</li>
							<li>
								<a href="" className="opacity-35">
									Drugs
								</a>
							</li>
							<li>
								<a href="" className="opacity-35">
									Blogs
								</a>
							</li>
						</ul>
						<ul>
							<li>
								<p className="text--2xl font-semibold">Find</p>
							</li>
							<li>
								<a href="" className="opacity-35">
									Clinics
								</a>
							</li>
							<li>
								<a href="" className="opacity-35">
									Pharmacy
								</a>
							</li>
						</ul>
						<ul>
							<li>
								<p className="text--2xl font-semibold">
									Contact
								</p>
							</li>
							<li>
								<a href="" className="opacity-35">
									331 Rhett Ville, Burleson <br /> 58799
								</a>
							</li>
							<li>
								<a href="" className="opacity-35">
									1-449-709-9073 x5655
								</a>
							</li>
							<li>
								<a href="" className="opacity-35">
									United State
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="flex flex-col gap-6 mt-16 opacity-35">
				<hr />
				<div className="flex flex-col justify-between sm:flex sm:flex-row gap-4">
					<p>Copyright © 2024 Healthify, inc. All Right Reserved</p>
					<div className="flex flex-col gap-2 sm:flex sm:flex-row sm:gap-12">
						<a href="">Privacy Policy</a>
						<a href="">FAQ</a>
						<a href="">Terms of Service</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
