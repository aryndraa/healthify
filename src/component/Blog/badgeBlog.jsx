export function FilterBadgeList({ tagsActive, onClear }) {
	if (tagsActive.length === 0) return null;

	return (
		<div className="my-4 border rounded-2xl items-center gap-4 p-8 flex bg-white md:flex-row flex-col md:rounded-full">
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
				<button className="text-red-500" onClick={onClear}>
					Clear Filter
				</button>
			</div>
		</div>
	);
}
