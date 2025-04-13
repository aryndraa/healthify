export function BlogHero({ backgroundImage }) {
	return (
		<div className="hidden p-64px sm:flex gap-4 mb-4">
			<div className="bg-white flex flex-col h-fit p-[64px] rounded-[40px]">
				<p className="font-semibold text-4xl 2xl:text-5xl mb-6 2xl:mb-16">
					Expand Your Medical Knowledge with Expert Blog Insights and
					Awareness
				</p>
				<p className="text-sm 2xl:text-xl">
					Stay informed and empowered with our expert-written blogs.
					Explore in-depth articles on drugs, diseases, and healthcare
					topics designed to expand your medical knowledge and raise
					health awareness. Whether you're looking for reliable
					information or insights to make better health decisions, our
					blog is your go-to resource for learning and education.
				</p>
			</div>
			<div
				className="w-full bg-cover bg-center bg-no-repeat rounded-xxl"
				style={{ backgroundImage: `url(${backgroundImage})` }}
			></div>
		</div>
	);
}
