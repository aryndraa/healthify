import { Hero } from "../../component/Landing Component/Hero.jsx";
import { Feature } from "../../component/Landing Component/Feature.jsx";
import { Explore } from "../../component/Landing Component/Explore.jsx";
import { ExpClinic } from "../../component/Landing Component/ExpClinic.jsx";
import { ExpPharmacy } from "../../component/Landing Component/ExpPharmacy.jsx";
import { Blogs } from "../../component/Landing Component/Blog.jsx";
// CSS
import "./Landing.css";
// Component
import FAQ from "../../component/FAQ.jsx";
// image assets
import IDemo2 from "../../assets/idemo2.svg";
import IDemo3 from "../../assets/idemo3.svg";


const Landing = () => {
	return (
		<div>
			{/* Hero  */}
			<Hero />
			{/* feature  */}
			<Feature />
			{/* explore content  */}
			<Explore />
			{/* image after explore  */}
			<div
				className="max-w-[1680px] h-[500px] rounded-[40px] mt-4 hidden xl:block"
				style={{
					backgroundImage: `url(${IDemo2})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			></div>
			{/* explore clinic and pharmacy  */}
			<div>
			<ExpClinic />
			<ExpPharmacy />
			</div>
			{/* blog content container  */}
			<Blogs />
			{/* Faq content  */}
			<div className="mt-[34px] mb-[30px] flex gap-4">
				<FAQ />
				<div
					className="Container2 max-[1550px]:hidden bg-cover bg-center rounded-[40px] w-[690px]"
					style={{ backgroundImage: `url(${IDemo3})` }}
				></div>
			</div>
		</div>
	);
};

export default Landing;
