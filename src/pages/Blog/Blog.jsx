import { SearchBar } from "../../component/SearchBar";
import { blogData } from "./blogdta";
import { BlogCard } from "../../component/BlogCard";
import idemo3 from "../../assets/Rectangle 78.svg";
import { useState, useEffect } from "react";
import { Filter } from "../../component/Drugs/FilterDrug";
import { FilterPanel } from "../../component/Blog/filterblog";
import { FilterBadgeList } from "../../component/Blog/badgeBlog";
import { BlogHero } from "../../component/Blog/blogHero";
import { BlogList } from "../../component/Blog/blogList";

export function Blog() {
	const [searchQuery, setSearchQuery] = useState("");
	const [active, setActive] = useState(false);
	const [tagsActive, setTagsActive] = useState([]);
	const [filteredBlogs, setFilteredBlogs] = useState(blogData);
	const [clearTrigger, setClearTrigger] = useState(false);

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
		<div className=" relative min-h-screen  mb-4">
			<div className="w-full flex gap-2 items-center mb-4">
				<SearchBar
					clearTrigger={clearTrigger}
					onSearch={setSearchQuery}
					placeholder="Search some of our blogs"
				/>
				<Filter onClick={() => setActive((prev) => !prev)} />
			</div>

			{active && (
				<FilterPanel
					tagsActive={tagsActive}
					toggleTag={toggleTag}
					tags={tags}
					topics={topics}
					diseases={diseases}
					authors={authors}
					onClose={() => setActive(false)}
				/>
			)}

			<FilterBadgeList tagsActive={tagsActive} onClear={clearFilters} />

			{!searchQuery && tagsActive.length === 0 && (
				<BlogHero backgroundImage={idemo3} />
			)}

			<BlogList
				blogs={filteredBlogs}
				onReset={() => {
					setSearchQuery("");
					setTagsActive([]);
					setClearTrigger((prev) => !prev);
				}}
			/>
		</div>
	);
}
