export function TagButton({ label, isActive, onClick }) {
	return (
		<button
			onClick={onClick}
			className={`border border-[#213170] rounded-full px-4 py-2 transition-colors duration-300 ${
				isActive
					? "bg-[#213170] text-white"
					: "hover:bg-[#213170] hover:text-white"
			}`}
		>
			{label}
		</button>
	);
}
