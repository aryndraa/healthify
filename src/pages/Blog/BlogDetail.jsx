import { useParams } from "react-router-dom";
import { blogData } from "./blogdta.js";
import { BlogCard } from "../../component/BlogCard.jsx";

export const BlogDetail = () => {
	const { id } = useParams(); 
	const blog = blogData.find((b) => b.id === parseInt(id)); 
	if (!blog) {
		return <p className="text-center text-red-500">Blog tidak ditemukan</p>;
	}

	const randomBlogs = blogData
		.filter((b) => b.id !== parseInt(id)) 
		.sort(() => Math.random() - 0.5) 
		.slice(0, 3); 

	return (
		<div className="min-h-screen  mt-[100px] sm:mt-[160px] mb-4">
			<div className="justify-center items-center flex flex-col 2xl:flex-row 2xl:items-start gap-4 mb-12">
				<div
					className="min-w-[220px] min-h-[220px]   2xl:w-[549px] 2xl:h-[549px] rounded-[40px] bg-cover bg-center"
					style={{ backgroundImage: `url(${blog.image})` }}
				></div>

				<div className="max-w-[1115px] flex flex-col gap-4">
					<div className="bg-white p-12 flex flex-col rounded-[40px] gap-4 ">
						<div className="flex gap-4">
							{blog.tags.map((tag, index) => (
								<p key={index} className="Tag">
									{tag}
								</p>
							))}
						</div>
						<p className="text--5xl font-semibold">{blog.title}</p>
						<p>
							{blog.date} <strong>by {blog.author}</strong>
						</p>
					</div>
					<div className="bg-white p-12 flex flex-col rounded-[40px] gap-4">
						<p className="text--lg">
							in today’s fast-paced world, access to reliable
							medical information is more important than ever.
							With countless sources available online, it can be
							challenging to separate fact from misinformation.
							That’s why our expert-driven blog is dedicated to
							providing accurate, up-to-date insights on drugs,
							diseases, and healthcare topics—helping you stay
							informed and make better health decisions
						</p>
						<br />
						<p className="text-lg  font-bold">
							Why Medical Knowledge Matters
						</p>
						<p className="text-lg">
							Understanding medical conditions, treatments, and
							medications empowers you to take charge of your
							health. Whether you’re a patient looking for
							guidance, a caregiver seeking reliable resources, or
							simply someone who values health education,
							expanding your knowledge can lead to better outcomes
							and informed choices.
						</p>
						<br />
						<p className="text-lg font-bold">
							What You’ll Find in Our Blog
						</p>
						<p className="text-lg">
							Our blog covers a wide range of health-related
							topics, including:
							<ul className="list-disc pl-5">
								<li>
									<p className="text--lg">
										Drug Information: Learn about common
										medications, their uses, side effects,
										and interactions.
									</p>
								</li>
								<li>
									<p className="text--lg">
										Disease Awareness: Get insights into
										symptoms, prevention, and treatment
										options for various conditions.
									</p>
								</li>
								<li>
									<p className="text--lg">
										Healthcare Tips: Discover expert advice
										on maintaining a healthy lifestyle and
										managing chronic illnesses.
									</p>
								</li>
								<li>
									<p className="text--lg">
										Medical Innovations: Stay updated on the
										latest advancements in medicine and
										healthcare technology.
									</p>
								</li>
							</ul>
						</p>
						<br />
						<p className="text-lg font-bold">
							The Power of Reliable Information
						</p>
						<p className="text-lg">
							Misinformation can be harmful, especially when it
							comes to health. That’s why all our content is
							carefully researched and reviewed by medical
							professionals to ensure accuracy and credibility. We
							believe that knowledge is the key to better health,
							and our goal is to make expert insights accessible
							to everyone. Stay Informed, Stay Healthy
						</p>
						<br />
						<p className="text-lg">
							Your health journey starts with knowledge. By
							reading our blog, you’re not just gaining
							information—you’re taking an active step toward a
							healthier life. Explore our latest articles, stay
							updated with medical trends, and empower yourself
							with the awareness you need to make confident health
							decisions.
						</p>
						<br />
						<p className="text-lg">
							Start exploring today and take control of your
							health with trusted medical insights!
						</p>
					</div>
				</div>
			</div>
			{/* more blog  */}
			<div className="mb-12">
				<div className=" flex justify-between py-[32px] px-[48px] bg-white rounded-[40px] items-center gap-2 group hover:cursor-pointer">
					<p className="text--5xl font-semibold">More Blogs</p>
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

				{/* 3 blog random  */}
				<div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 justify-center gap-4 mt-4">
					{randomBlogs.map((blog) => (
						<BlogCard key={blog.id} blog={blog} />
					))}
				</div>
			</div>
		</div>
	);
};
