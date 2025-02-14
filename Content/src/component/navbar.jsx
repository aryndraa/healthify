import { useState, useEffect } from "react";
import Heal from "../assets/Logo.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	   const [isScrolled, setIsScrolled] = useState(false);

		
	   useEffect(() => {
		const handleScroll = () => {
			if(window.scrollY > 50){
				setIsScrolled(true)
			}else{
				setIsScrolled(false)
			}
		};
		window.addEventListener("scroll" , handleScroll)
		return() => removeEventListener("scroll" , handleScroll)
	   }, [])

	const navItems = [
		{ name: "Home", to: "/" },
		{ name: "Disease", to: "/disease" },
		{ name: "Drugs", to: "/drugs" },
		{ name: "Clinic", to: "/clinic" },
		{ name: "Pharmacy", to: "/pharmacy" },
		{ name: "Blogs", to: "/blogs" },
	];
	return (
		<div
			className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
				isScrolled
					? "bg-white shadow-md py-3 px-10"
					: "mt-10 mb-12 px-[120px]"
			}`}
		>
			<div className="flex items-center justify-between   ">
				<img src={Heal} alt="Healthify Logo" className="w-40" />
				<nav className="no-underline flex bg-white rounded-full">
					{navItems.map((item) => (
						<NavLink
							key={item.to}
							to={item.to}
							className={({ isActive }) =>
								`Nav ${isActive ? "active" : ""} text-xl`
							}
						>
							{item.name}
						</NavLink>
					))}
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
