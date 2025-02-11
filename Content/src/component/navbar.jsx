import Heal from "../assets/Logo.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	const navItems = [
		{ name: "Home", to: "/" },
		{ name: "Disease", to: "/disease" },
		{ name: "Drugs", to: "/drugs" },
		{ name: "Clinic", to: "/clinic" },
		{ name: "Pharmacy", to: "/pharmacy" },
		{ name: "Blogs", to: "/blogs" },
	];
	return (
		<div className="flex items-center justify-between  mt-10 mb-12">
			<img src={Heal} alt="Healthify Logo" className="w-40" />
			<nav className="no-underline flex bg-white rounded-full">
				{navItems.map((item) => (
					<NavLink
						key={item.to}
						to={item.to}
						className={({ isActive }) =>
							`Nav ${isActive ? "active" : ""}`
						}
					>
						{item.name}
					</NavLink>
				))}
			</nav>
		</div>
	);
};

export default Navbar;
