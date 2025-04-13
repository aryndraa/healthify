import { useNavigate } from "react-router-dom";

export const BlogCard = ({ blog }) => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/blogs/${blog.id}`);
	};
	return (
		<div className="items">
			<div
				onClick={handleClick}
				className="BLOG bg-white h-screen  flex flex-col justify-between p-6 "
			>
				<div className="flex flex-col gap-6 justify-between sm:flex-row">
					{/* Tags */}
					<div className="flex gap-4 h-fit">
						{blog.tags.map((tag, index) => (
							<p key={index} className="Tag">
								{tag}
							</p>
						))}
					</div>
					{/* Image */}
					<div
						className="w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] rounded-full bg-center bg-cover"
						style={{ backgroundImage: `url(${blog.image})` }}
					></div>
				</div>
				{/* Blog Content */}
				<div className="Blog-Content flex flex-col gap-4">
					<p className="text-2xl font-semibold">{blog.title}</p>
					<p className="text--lg">{blog.description}</p>
				</div>
			</div>
		</div>
	);
};
