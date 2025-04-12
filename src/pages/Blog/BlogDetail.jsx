import { useParams } from "react-router-dom";
import { blogData } from "./blogdta.js";
import { BlogCard } from "../../component/BlogCard.jsx";
import { useNavigate } from "react-router-dom";

export const BlogDetail = () => {
	const navigate = useNavigate()
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
		<div className="min-h-screen  mb-4">
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
							{blog.content[0].orientations}
						</p>
						<br />
						<p className="text--lg  font-bold">
							{blog.content[0].orientTitle}
						</p>
						<p className="text--lg">
							{blog.content[0].orientExplan}
						</p>
						<br />
						<p className="text--lg font-bold">
							{blog.content[0].benefit}
						</p>
						<ul className="text--lg list-disc ml-4">
							{blog.content[0].listBenefit.map((item, index) => (
								<li key={index}>{item.text}</li>
							))}
						</ul>
						<br />
						<p className="text--lg font-bold">
							{blog.content[0].Handling}
						</p>
						<p className="text--lg">
							{blog.content[0].HandlingDesc}
						</p>
						<ul className="text--lg list-disc ml-4">
							{blog.content[0].HandlingList.map((item, index) => (
								<li key={index}>{item.text}</li>
							))}
						</ul>
						<br />
						<p className="text--lg font-bold">
						Kesimpulan
						</p>
						<p className="text--lg">
							{blog.content[0].conclusion}
						</p>
					</div>
				</div>
			</div>
			{/* more blog  */}
			<div className="mb-12">
				<div
					onClick={() => navigate("/blogs")}
					className=" flex justify-between py-[32px] px-[48px] bg-white rounded-[40px] items-center gap-2 group "
				>
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
