import drugsImage from "../../assets/drugs.png";

export function DrugsHero() {
	return (
		<div className="hidden p-64px sm:flex gap-4">
			<div
				className="w-full bg-cover bg-center bg-no-repeat rounded-xxl"
				style={{ backgroundImage: `url(${drugsImage})` }}
			></div>
			<div className="bg-white flex flex-col h-fit p-[64px] rounded-[40px]">
				<h1 className="font-semibold text-4xl 2xl:text-5xl mb-6 2xl:mb-16">
					Discover Reliable Drug Information for Safe and Informed
					Healthcare
				</h1>
				<p className="text-sm 2xl:text-xl">
					Explore a complete database of trusted drug information,
					including uses, dosages, side effects, precautions,
					interactions, and safety guidelines, to make well-informed
					healthcare decisions for yourself and your loved ones.
				</p>
			</div>
		</div>
	);
}
