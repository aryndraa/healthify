import PropTypes from "prop-types";
import "../pages/Landing/landing.css"

export const BlogCard = ({ blog }) => {
	return (
		<div className="items">
			<div className="BLOG bg-white  flex flex-col justify-between p-6 hover:cursor-pointer">
				<div className="flex flex-col gap-6 justify-between lg:flex-row">
					{/* Tags */}
					<div className="flex gap-4">
						{blog.tags.map((tag, index) => (
							<p
								key={index}
								className="Tag"
							>
								{tag}
							</p>
						))}
					</div>
					{/* Image */}
					<img
						className="w-24 sm:w-[120px] h-auto rounded-lg"
						src={blog.image}
						alt={blog.title}
					/>
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


// Prop validation
BlogCard.propTypes = {
	blog: PropTypes.shape({
		image: PropTypes.string.isRequired,
		tags: PropTypes.arrayOf(PropTypes.string).isRequired,
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
	}).isRequired,
};
