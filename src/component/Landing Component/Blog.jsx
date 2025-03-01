import Blog1 from "../../assets/Ellipse 5-1.svg";
import Blog2 from "../../assets/Ellipse 5-2.svg";
import Blog3 from "../../assets/Ellipse 5.svg";
export const Blogs = () => {
	return (
		<div className=" flex  flex-col gap-4 ">
			<div className="items">
				<div className=" flex justify-between max-w-[549px] min-[1441px]:max-w-[1920px] w-screen py-[32px] px-[48px] bg-white rounded-[40px] items-center gap-2 group hover:cursor-pointer">
					<p className="text--5xl font-semibold">Explore Our Blogs</p>
					<svg
						className="rounded-full p-[10px] w-[50px] h-[50px] md:w-[72px] md:h-[72px] md:p-[20px]  transition-transform duration-300 bg-[#C5E5FF]  group-hover:border-solid group-hover:border-[#C5E5FF]  group-hover:border-[3px] group-hover:rotate-45  group-hover:bg-[#213170] "
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
					>
						<path
							fill="black"
							className=" group-hover:fill-[#C5E5FF]"
							fillRule="evenodd"
							d="M9 6.75a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V7.81L6.53 18.53a.75.75 0 0 1-1.06-1.06L16.19 6.75z"
							clipRule="evenodd"
						></path>
					</svg>
				</div>
			</div>
			<div className="grid grid-cols-1 2xl:grid-cols-3 justify-center gap-4">
				{/* blog content 1  */}
				<div className="items">
					<div className="BLOG bg-white h-screen flex flex-col justify-between hover:">
						<div className="flex flex-col gap-6 justify-between lg:flex-row">
							<div className="flex gap-4">
								<p className="Tag ">Health</p>
								<p className="Tag ">Disease</p>
							</div>
							<img
								className="w-24 sm:w-[120px] h-auto"
								src={Blog3}
								alt="Blog timoni image"
							/>
						</div>
						<div className="Blog-Content flex flex-col gap-4">
							<p className="text--2xl font-semibold">
								This is why you always open incognito tabs at
								night
							</p>
							<p className="text--lg">
								Market important all turn accountable like cc
								didn&apos;t. Turn dog commitment engagement
								contribution book silently I container.
								Competitors procrastinating unpack marginalised
								company please.{" "}
							</p>
						</div>
					</div>
				</div>
				{/* blog content 2 */}
				<div className="items">
					<div className="BLOG bg-white h-screen flex flex-col justify-between">
						<div className="flex flex-col gap-6 justify-between lg:flex-row">
							<div className="flex gap-4">
								<p className="Tag text-whi">Health</p>
								<p className="Tag ">Disease</p>
							</div>
							<img
								className="w-24 sm:w-[120px] h-auto"
								src={Blog2}
								alt="Blog timoni image"
								height={140}
							/>
						</div>
						<div className="Blog-Content flex flex-col gap-4">
							<p className="text--2xl font-semibold">
								New virus Nvidia 5090 make gamers broke
							</p>
							<p className="text--lg">
								Market important all turn accountable like cc
								didn&apos;t. Turn dog commitment engagement
								contribution book silently I container.
								Competitors procrastinating unpack marginalised
								company please.{" "}
							</p>
						</div>
					</div>
				</div>
				{/* blog content 3  */}
				<div className="items">
					<div className="BLOG bg-white h-screen flex flex-col justify-between">
						<div className="flex flex-col gap-6 justify-between lg:flex-row">
							<div className="flex gap-4">
								<p className="Tag text-whi">Health</p>
								<p className="Tag ">Disease</p>
							</div>
							<img
								className="w-24 sm:w-[120px] h-auto"
								src={Blog1}
								alt="Blog timoni image"
								height={140}
							/>
						</div>
						<div className="Blog-Content flex flex-col gap-4">
							<p className="text--2xl font-semibold">
								Cheat code to boost your immune (100% Legit)
							</p>
							<p className="text--lg">
								Market important all turn accountable like cc
								didn&apos;t. Turn dog commitment engagement
								contribution book silently I container.
								Competitors procrastinating unpack marginalised
								company please.{" "}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
