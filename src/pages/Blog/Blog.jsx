import { SearchBar } from "../../component/SearchBar";
import { ShortBy } from "../../component/ShortBy";
import { blogData } from "./blogdta";
import { BlogCard } from "../../component/BlogCard.jsx";
import idemo3 from "../../assets/Rectangle 78.svg";
import { useState } from "react";


export function Blog() {
	const [searchQuery, setSearchQuery] = useState('')

 const filteredBlog = blogData.filter((blog) =>
		blog.title.toLowerCase().includes(searchQuery.toLowerCase())
 );
return (
	<div className="min-h-screen  mt-[100px] sm:mt-[160px] mb-4">
		<div className="w-full flex gap-2 items-center mb-4">
			<SearchBar onSearch={setSearchQuery} />
			<ShortBy />
		</div>
		<div className="hidden min-h-[400px] p-64px sm:flex  gap-4 ">
			<div className=" bg-white flex flex-col justify-between p-[64px] rounded-[40px] ">
				<p className=" text--5xl font-semibold">
					Expand Your Medical Knowledge with Expert Blog Insights and
					Awareness
				</p>
				<p className=" text--lg">
					Stay informed and empowered with our expert-written blogs.
					Explore in-depth articles on drugs, diseases, and healthcare
					topics designed to expand your medical knowledge and raise
					health awareness. Whether you're looking for reliable
					information or insights to make better health decisions, our
					blog is your go-to resource for learning and education.
				</p>
			</div>
			<img
				src={idemo3}
				alt="particle image"
				width={400}
				className="rounded-[40px] max-[1550px]:hidden"
			/>
		</div>
		<div className="w-full grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10 mt-4">
			{filteredBlog.length > 0 ? (
				filteredBlog.map((blog) => (
					<BlogCard key={blog.id} blog={blog} />
				))
			) : (
				<p className="col-span-full text-center text-gray-500">
					No results found.
				</p>
			)}
		</div>
	</div>
);
}