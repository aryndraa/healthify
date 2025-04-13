import { useState, useEffect } from "react";
import Heal from "../assets/Logo.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isScrollingDown, setIsScrollingDown] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		let lastScrollY = window.scrollY;

		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			// Set isScrolled to true if passed 200px
			if (currentScrollY > 200) {
				setIsScrolled(true);

				// Only update scroll direction if isScrolled is true
				if (currentScrollY > lastScrollY) {
					setIsScrollingDown(true);
				} else if (currentScrollY < lastScrollY - 10) {
					setIsScrollingDown(false);
				}
			} else {
				setIsScrolled(false);
			}

			lastScrollY = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems = [
		{ name: "Home", to: "/" },
		{ name: "Disease", to: "/disease" },
		{ name: "Drugs", to: "/drugs" },
		{ name: "Clinic", to: "/clinic" },
		{ name: "Pharmacy", to: "/pharmacy" },
		{ name: "Blogs", to: "/blogs" },
	];

	return (
		<div className={` top-0 left-0 right-0 w-full z-50  flex justify-center ${
			isScrolled ? 'fixed animate_scroll_up' : "absolute "
		}`}>
			<div
				className={`w-screen z-50 transition-all max-w-[1750px] rounded-b-xl duration-500 ${
					isScrolled
						? isScrollingDown
							? "-translate-y-full bg-white shadow-md py-[18px] lg:py-4 px-5 md:px-8 lg:px-10 lg:mx-8 2xl:mx-16"
							: "translate-y-0 bg-white shadow-md py-[18px] 2xl:py-4 px-5 md:px-8 lg:px-10 lg:mx-8 2xl:mx-16"
						: "shadow-md lg:shadow-none bg-white lg:bg-transparent py-[18px] px-5 md:px-8 lg:mx-16 2xl:mx-28 lg:pt-10"
				}`}
			>
				<div className="flex items-center justify-between w-full">
					<img src={Heal} alt="Healthify Logo" className="2xl:w-40 lg:w-36 w-28"/>
					<nav className="no-underline flex bg-white rounded-full max-[1156px]:hidden">
						{navItems.map((item) => (
							<NavLink
								key={item.to}
								to={item.to}
								className={({isActive}) =>
									`${isActive ? "bg-trinary" : "bg-white"} font-medium 2xl:py-6 py-[18px] 2xl:px-8 px-6 rounded-xxl text-center hover:bg-trinary/30 2xl:text-xl lg:text-base`
								}
							>
								{item.name}
							</NavLink>
						))}
					</nav>
					<div
						className="min-[1156px]:hidden   "
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						<svg
							className="bg-white rounded-md w-8"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeWidth={1.5}
								d="M4 7h16M4 12h16M4 17h16"
							/>
						</svg>
					</div>
				</div>

				<div
					className={`lg:hidden flex flex-col items-center transition-all duration-300 overflow-hidden ${
						isMenuOpen ? "max-h-[300px] mt-4" : "max-h-0"
					}`}
				>
					<nav className="flex flex-col items-center bg-white rounded-lg shadow-md w-full">
						{navItems.map((item) => (
							<NavLink
								key={item.to}
								to={item.to}
								className={({isActive}) =>
									`block w-full text-center py-2 ${
										isActive ? "bg-gray-100" : ""
									}`
								}
								onClick={() => setIsMenuOpen(false)}
							>
								{item.name}
							</NavLink>
						))}
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
