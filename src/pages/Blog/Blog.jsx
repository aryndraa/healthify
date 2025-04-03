import { SearchBar } from "../../component/SearchBar";
import xIcon from "../../assets/x-icon.svg";
import { blogData } from "./blogdta";
import { BlogCard } from "../../component/BlogCard.jsx";
import idemo3 from "../../assets/Rectangle 78.svg";
import { useState, useEffect } from "react";
import { Filter } from "../../component/Drugs/FilterDrug";

export function Blog() {
	const [searchQuery, setSearchQuery] = useState("");
	const [active, setActive] = useState(false);
	const [tagsActive, setTagsActive] = useState([]);
	const [filteredBlogs, setFilteredBlogs] = useState(blogData);

	const tags = [
		"Health",
		"Disease",
		"Tips & Trick",
		"Education",
		"Treatment",
		"News",
		"Symptom",
		"Drug",
		"Prevention",
		"Wellness",
		"Exercise",
		"Research",
		"Therapy",
		"Updates",
		"Diagnosis",
		"Medication",
		"Nutrition",
		"Healthy Habits",
	];

	const topics = [
		"Women's Health",
		"Man's Health",
		"Elderly Care",
		"Mental Health",
		"Kid's Health",
		"Dental Health",
		"Eye Care",
		"Skin Health",
		"Nutritional Wellness",
		"Holistic Healing",
		"Reproductive Health",
		"Physical Fitness",
		"Pediatric Care",
		"Chronic Conditions",
	];

	const diseases = [
		"Cancer",
		"Diabetes",
		"Stroke",
		"Asthma",
		"Influenza",
		"Tuberculosis",
		"Arthritis",
		"Hypertension",
		"Osteoporosis",
		"Anemia",
		"Psoriasis",
		"Allergies",
		"Eczema",
		"Obesity",
		"Migraine",
		"Alzheimer's",
		"Depression",
	];

	const authors = [
		"Aldena Rey",
		"Fiun Astares",
		"Stora Colica",
		"Mimistaza Daimu",
		"Zeritha Luminar",
		"Quentara Silvaris",
		"Veleron Astrae",
		"Zephyrion Gale",
		"Lunara Starlight",
		"Serenity Moonfall",
	];

	const toggleTag = (tag) => {
		setTagsActive((prev) =>
			prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
		);
	};

	const clearFilters = () => {
		setTagsActive([]);
	};

	useEffect(() => {
		let filtered = blogData;

		if (tagsActive.length > 0) {
			filtered = filtered.filter((blog) =>
				tagsActive.some(
					(tag) =>
						blog.tags?.includes(tag) ||
						blog.topics?.includes(tag) ||
						blog.diseases?.includes(tag) ||
						blog.author?.includes(tag)
				)
			);
		}

		if (searchQuery) {
			filtered = filtered.filter((blog) =>
				blog.title.toLowerCase().includes(searchQuery.toLowerCase())
			);
		}

		setFilteredBlogs(filtered);
	}, [tagsActive, searchQuery]);

	return (
		<div className=" relative min-h-screen mt-[100px] sm:mt-[160px] mb-4">
			<div className="w-full flex gap-2 items-center mb-4">
				<SearchBar onSearch={setSearchQuery} />
				<Filter onClick={() => setActive((prev) => !prev)} />
			</div>

			{active && (
				<div className="w-full grid grid-cols-4 absolute">
					<div className="col-span-3 col-start-2 bg-white p-8 rounded-xl">
						<div className="flex justify-end">
							<button onClick={() => setActive(false)}>
								<img src={xIcon} alt="Close" />
							</button>
						</div>

						{/* Tags */}
						<div>
							<p className="font-medium text-xl">Tags</p>
							<hr />
							<div className="tags mt-4 flex gap-3 flex-wrap">
								{tags.map((tag, index) => (
									<button
										key={index}
										onClick={() => toggleTag(tag)}
										className={`border border-[#213170] rounded-full px-4 py-2 transition-colors duration-300 ${
											tagsActive.includes(tag)
												? "bg-[#213170] text-white"
												: "hover:bg-[#213170] hover:text-white"
										}`}
									>
										{tag}
									</button>
								))}
							</div>
						</div>

						{/* Topics */}
						<div className="mt-4">
							<p className="font-medium text-xl">Topics</p>
							<hr />
							<div className="tags mt-4 flex gap-3 flex-wrap">
								{topics.map((topic, index) => (
									<button
										key={index}
										onClick={() => toggleTag(topic)}
										className={`border border-[#213170] rounded-full px-4 py-2 transition-colors duration-300 ${
											tagsActive.includes(topic)
												? "bg-[#213170] text-white"
												: "hover:bg-[#213170] hover:text-white"
										}`}
									>
										{topic}
									</button>
								))}
							</div>
						</div>

						{/* Diseases */}
						<div className="mt-4">
							<p className="font-medium text-xl">Diseases</p>
							<hr />
							<div className="tags mt-4 flex gap-3 flex-wrap">
								{diseases.map((disease, index) => (
									<button
										key={index}
										onClick={() => toggleTag(disease)}
										className={`border border-[#213170] rounded-full px-4 py-2 transition-colors duration-300 ${
											tagsActive.includes(disease)
												? "bg-[#213170] text-white"
												: "hover:bg-[#213170] hover:text-white"
										}`}
									>
										{disease}
									</button>
								))}
							</div>
						</div>

						{/* Authors */}
						<div className="mt-4">
							<p className="font-medium text-xl">Authors</p>
							<hr />
							<div className="tags mt-4 flex gap-3 flex-wrap">
								{authors.map((author, index) => (
									<button
										key={index}
										onClick={() => toggleTag(author)}
										className={`border border-[#213170] rounded-full px-4 py-2 transition-colors duration-300 ${
											tagsActive.includes(author)
												? "bg-[#213170] text-white"
												: "hover:bg-[#213170] hover:text-white"
										}`}
									>
										{author}
									</button>
								))}
							</div>
						</div>
					</div>
				</div>
			)}

			{tagsActive.length > 0 && (
				<div className="my-4 border rounded-full items-center gap-4 p-8 flex bg-white">
					<p className="font-semibold text-2xl">Filter Applied:</p>
					<div className="flex flex-wrap gap-2 mt-2">
						{tagsActive.map((tag, index) => (
							<span
								key={index}
								className="px-4 py-2 bg-[#213170] text-white rounded-full"
							>
								{tag}
							</span>
						))}
						<button className="text-red-500" onClick={clearFilters}>
							Clear Filter
						</button>
					</div>
				</div>
			)}
			<div className="hidden min-h-[400px] p-64px sm:flex  gap-4 ">
				<div className=" bg-white flex flex-col justify-between p-[64px] rounded-[40px] ">
					<p className=" text--5xl font-semibold">
						Expand Your Medical Knowledge with Expert Blog Insights
						and Awareness
					</p>
					<p className=" text--lg">
						Stay informed and empowered with our expert-written
						blogs. Explore in-depth articles on drugs, diseases, and
						healthcare topics designed to expand your medical
						knowledge and raise health awareness. Whether you're
						looking for reliable information or insights to make
						better health decisions, our blog is your go-to resource
						for learning and education.
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
				{filteredBlogs.length > 0 ? (
					filteredBlogs.map((blog) => (
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
