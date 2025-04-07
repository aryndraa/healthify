import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import IDemo from "../../assets/Demo.svg";
export const Hero = () => {
	const { ref, inView } = useInView({ triggerOnce: true });
	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 100 }}
			animate={inView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 1 , delay: 0.7}}
			className=" max-w-screen flex gap-4 mt-[100px] lg:mt-[160px]"
		>
			<div className="Container1">
				<div className="item-1">
					<div>
						<p className=" font-semibold text--5xl ">
							Where Health Meets Knowledge for a Brighter Future
						</p>
						<p className=" text--lg  mt-4 mb-6 ">
							Explore a wealth of resources designed to empower
							you with the knowledge you need to make informed
							health decisions. From understanding medications and
							diseases to finding local healthcare services, we
							are dedicated to supporting your journey towards a
							healthier, happier life.
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
								<p className="font-medium text--lg">Pharmacy</p>
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
						understanding our bodies and the factors that influence
						our well-being empowers us to make informed choices.”
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
					<div className="item-2 justify-center max-[1550px]:hidden">
						<p className=" font-semibold text--4xl">Our mision</p>
						<p className=" text--lg">
							Our mission is to empower individuals with
							accessible health information that promotes informed
							decision-making and enhances overall well-being.
						</p>
					</div>
				</div>
			</div>
			{/* item 3 */}
			<div
				className="Container2 max-[1550px]:hidden bg-cover bg-center rounded-[40px] w-screen "
				style={{ backgroundImage: `url(${IDemo})` }}
			></div>
		</motion.div>
	);
};
