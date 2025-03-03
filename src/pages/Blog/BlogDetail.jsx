import { useParams } from "react-router-dom";
import { blogData } from "./blogdta.js";

export const BlogDetail = () => {
	const { id } = useParams(); // Ambil id dari URL
	const blog = blogData.find((b) => b.id === parseInt(id)); // Cari data berdasarkan ID

	if (!blog) {
		return <p className="text-center text-red-500">Blog tidak ditemukan</p>;
	}

	return (
		<div className="p-6 mt-[160px]">
			<h1 className="text-2xl font-bold">{blog.title}</h1>
			<p className="text-gray-700 mt-4">{blog.content}</p>
		</div>
	);
};
