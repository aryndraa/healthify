import { useNavigate } from "react-router-dom";

export const BlogCard = ({ blog }) => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/blogs/${blog.id}`);
	};
	return (
		<div className="items h-full">
			<div
				onClick={handleClick}
				className="BLOG bg-white h-full w-full gap-6 flex flex-col justify-between p-6 "
			>
				<div className="flex flex-col gap-6 justify-between 2xl:flex-row">
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
						className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full bg-center bg-cover"
						style={{ backgroundImage: `url(${blog.image})` }}
					></div>
				</div>
				{/* Blog Content */}
				<div className="Blog-Content flex flex-col gap-4">
					<p className="text--2xl font-semibold">{blog.title}</p>
					<p className="text--lg">{blog.description}</p>
				</div>
			</div>
		</div>
	);
};
