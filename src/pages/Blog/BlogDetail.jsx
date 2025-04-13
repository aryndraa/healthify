import { useParams } from "react-router-dom";
import { blogData } from "./blogdta.js";
import { BlogCard } from "../../component/BlogCard.jsx";
import { useNavigate } from "react-router-dom";
import { BlogContent } from "../../component/Blog/blogDetail/blogContent.jsx";
import { MoreBlogs } from "../../component/Blog/blogDetail/moreBlog.jsx";

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
			<BlogContent blog={blog} />
			{/* more blog  */}
			<MoreBlogs blogs={randomBlogs} />
		</div>
	);
};
