import { useState, useEffect } from "react";
import Heal from "../assets/Logo.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
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
		<div className="fixed top-0 left-0 w-full z-50 flex justify-center ">
			<div
				className={`max-w-[1920px]  w-screen transition-all  rounded-b-xl duration-300 ${
					isScrolled
						? "bg-white shadow-md py-3 px-10 lg:mx-10 "
						: "lg:mt-10 lg:mb-12 px-10 py-3 lg:py-0 lg:px-[120px] shadow-md lg:shadow-none bg-white lg:bg-transparent "
				}`}
			>
				<div className="flex items-center justify-between w-full">
					<img src={Heal} alt="Healthify Logo" className="2xl:w-40 lg:w-36 w-24" />
					<nav className="no-underline flex bg-white rounded-full max-[1156px]:hidden">
						{navItems.map((item) => (
							<NavLink
								key={item.to}
								to={item.to}
								className={({ isActive }) =>
									`${isActive ? "bg-trinary" : "bg-white"} font-medium 2xl:py-6 py-5 2xl:px-8 px-6 rounded-xxl text-center hover:bg-trinary/30 2xl:text-xl lg:text-lg`
								}
							>
								{item.name}
							</NavLink>
						))}
					</nav>
					<div
						className="min-[1156px]:hidden cursor-pointer"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						<svg
							className="bg-white rounded-md w-10"
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
								className={({ isActive }) =>
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
