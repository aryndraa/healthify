import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import IDemo from "../../assets/Demo.svg";

const fadeUpVariants = {
	hidden: { opacity: 0, y: 40 },
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.1 + i * 0.2,
			duration: 0.5,
			ease: "easeOut",
		},
	}),
};

export const Hero = () => {
	const navigate = useNavigate();
	const { ref, inView } = useInView({ triggerOnce: true });

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={inView ? "visible" : "hidden"}
			className="max-w-screen flex md:gap-4 "
		>
			<motion.div variants={fadeUpVariants} className="Container1 2xl:gap-4">
				<div className="item-1 ">
					{/** Heading */}
					<motion.p
						variants={fadeUpVariants}
						custom={0}
						className="font-semibold text--5xl"
					>
						Where Health Meets Knowledge for a Brighter Future
					</motion.p>

					{/** Subheading */}
					<motion.p
						variants={fadeUpVariants}
						custom={1}
						className="text--lg mt-4 mb-6   "
					>
						Explore a wealth of resources designed to empower you
						with the knowledge you need to make informed health
						decisions. From understanding medications and diseases
						to finding local healthcare services, we are dedicated
						to supporting your journey towards a healthier, happier
						life.
					</motion.p>

					{/** Buttons */}
					<div className="flex flex-wrap gap-4">
						{[
							{ label: "Nearest Pharmacy", link: "/pharmacy" },
							{ label: "Nearest Clinic", link: "/clinic" },
							{ label: "Read our Blogs", link: "/blogs" },
							{ label: "Drugs", link: "/drugs" },
						].map((btn, index) => (
							<motion.button
								key={btn.label}
								variants={fadeUpVariants}
								custom={index + 2}
								whileHover={{ scale: 1.05 }}
								onClick={() => navigate(btn.link)}
								className="Button flex items-center gap-2   "
							>
								<p className="font-medium text--lg">
									{btn.label}
								</p>
								<svg
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
									/>
								</svg>
							</motion.button>
						))}
					</div>

					{/** Quote */}
					<motion.p
						variants={fadeUpVariants}
						custom={6}
						whileHover={{ scale: 1.02 }}
						className="deskItem1 hidden sm:block font-medium italic text--lg mt-8   "
					>
						“Great health stems from great knowledge, as
						understanding our bodies and the factors that influence
						our well-being empowers us to make informed choices.”
					</motion.p>
				</div>

				{/* Item 2 */}
				<div className="hidden sm:flex gap-4">
					<motion.img
						src={IDemo}
						alt="particle image"
						width={250}
						variants={fadeUpVariants}
						custom={7}
						whileHover={{ scale: 1.02 }}
						className="rounded-[40px] max-[1550px]:hidden   "
					/>
					<motion.div
						variants={fadeUpVariants}
						custom={8}
						className="item-2 justify-center max-[1550px]:hidden space-y-2   "
					>
						<p className="font-semibold text--4xl">Our mission</p>
						<p className="text--lg">
							Our mission is to empower individuals with
							accessible health information that promotes informed
							decision-making and enhances overall well-being.
						</p>
					</motion.div>
				</div>
			</motion.div>

			{/* Item 3 */}
			<motion.div
				variants={fadeUpVariants}
				custom={9}
				whileHover={{ scale: 1.02 }}
				className="Container2 max-lg:hidden bg-cover bg-center rounded-[40px] w-screen   "
				style={{ backgroundImage: `url(${IDemo})` }}
			></motion.div>
		</motion.div>
	);
};
