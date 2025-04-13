import { BlogCard } from "../../BlogCard";
import { useNavigate } from "react-router-dom";

export function MoreBlogs({ blogs }) {
	const navigate = useNavigate();

	return (
		<div className="mb-12">
			<div
				onClick={() => navigate("/blogs")}
				className="flex justify-between py-[32px] px-[48px] bg-white rounded-[40px] items-center gap-2 group cursor-pointer"
			>
				<p className="text--5xl font-semibold">More Blogs</p>
				<svg
					className="rounded-full p-[10px] w-[50px] h-[50px] md:w-[72px] md:h-[72px] md:p-[20px] transition-transform duration-300 bg-[#C5E5FF] group-hover:border-solid group-hover:border-[#C5E5FF] group-hover:border-[3px] group-hover:rotate-45 group-hover:bg-[#213170]"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<path
						fill="black"
						className="group-hover:fill-[#C5E5FF]"
						fillRule="evenodd"
						d="M9 6.75a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V7.81L6.53 18.53a.75.75 0 0 1-1.06-1.06L16.19 6.75z"
						clipRule="evenodd"
					></path>
				</svg>
			</div>

			<div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 justify-center gap-4 mt-4">
				{blogs.map((blog) => (
					<BlogCard key={blog.id} blog={blog} />
				))}
			</div>
		</div>
	);
}
