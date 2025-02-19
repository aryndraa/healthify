import { useState, useEffect } from "react";
import Heal from "../assets/Logo.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);

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
				className={`max-w-[1920px] w-full transition-all duration-300 ${
					isScrolled
						? "bg-white shadow-md py-3 px-10  mx-10 rounded-xl"
						: "mt-10 mb-12 px-[120px]"
				}`}
			>
				<div className="flex items-center justify-between">
					<img src={Heal} alt="Healthify Logo" className="w-40" />
					<nav className="no-underline flex bg-white rounded-full max-[1156px]:hidden">
						{navItems.map((item) => (
							<NavLink
								key={item.to}
								to={item.to}
								className={({ isActive }) =>
									`Nav ${isActive ? "active" : ""} text--xl`
								}
							>
								{item.name}
							</NavLink>
						))}
					</nav>
					<svg
						className="bg-white rounded-md min-[1156px]:hidden"
						xmlns="http://www.w3.org/2000/svg"
						width={50}
						height={50}
						viewBox="0 0 24 24"
					>
						<path
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeWidth={1.5}
							d="M4 7h3m13 0h-9m9 10h-3M4 17h9m-9-5h16"
						></path>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
