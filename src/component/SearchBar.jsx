import { useState, useEffect } from "react";
import searchIcon from "../assets/search.svg";

export const SearchBar = ({ onSearch, placeholder, clearTrigger }) => {
	const [query, setQuery] = useState("");

	useEffect(() => {
		setQuery("");
	}, [clearTrigger]);

	const handleSearch = (e) => {
		e.preventDefault();
		onSearch(query);
	};

	return (
		<form
			onSubmit={handleSearch}
			className="flex w-full bg-white rounded-full"
		>
			<input
				type="text"
				placeholder={placeholder}
				className="flex-1 w-full py-4 2xl:py-7 px-8 2xl:px-12 placeholder:text-zinc-400 rounded-full 2xl:text-xl focus:outline-none placeholder:font-medium"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<button
				type="submit"
				className="bg-trinary p-5 2xl:p-6 rounded-full"
			>
				<img src={searchIcon} alt="Search" className="w-5 2xl:w-8" />
			</button>
		</form>
	);
};
