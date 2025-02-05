import Navbar from "../../component/navbar";
import "../Landing/Landing.css";
const Landing = () => {
	return (
		<div>
			<Navbar />
			<div className="Container  mt-9">
				<div className="item-1">
					<p className="font-Figtree font-semibold text-5xl">
						Where Health Meets Knowledge for a Brighter Future
					</p>
					<p className="font-Figtree text-lg  mt-4 mb-6">
						Explore a wealth of resources designed to empower you
						with the knowledge you need to make informed health
						decisions. From understanding medications and diseases
						to finding local healthcare services, we are dedicated
						to supporting your journey towards a healthier, happier
						life.
					</p>

					<div className="bg-inherit flex flex-wrap gap-4">
						<div className="Button  ">
							<p>Nearest Pharmacy</p>
							<svg
								className="bg-inherit"
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
								className="bg-inherit"
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
								className="bg-inherit"
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
								className="bg-inherit"
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

					<p className="deskItem1 font-Figtree font-medium italic mt-24">
						“Great health stems from great knowledge, as
						understanding our bodies and the factors that influence
						our well-being empowers us to make informed choices.”
					</p>
				</div>
				
					<img src="" alt="" />
				
			</div>
		</div>
	);
};

export default Landing;
