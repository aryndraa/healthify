import sortIcon from "../../assets/filter.svg";
import downIcon from "../../assets/down.svg";

export const FilterDrug = ({ onClick }) => {
	return (
		<div>
			<div className="relative flex items-center gap-2">
				<div
					className="p-4 2xl:p-6 bg-trinary rounded-full min-w-9 cursor-pointer"
					onClick={onClick} // Tambahkan event handler di sini
				>
					<img
						src={sortIcon}
						alt="Sort"
						className="min-w-6 2xl:min-w-9 h-6 2xl:h-8"
					/>
				</div>
				<button
					className="hidden 2xl:text-xl font-medium sm:flex items-center gap-6 text-text py-4 px-8 2xl:py-7 2xl:px-12 bg-white rounded-full text-nowrap"
					onClick={onClick} // Tambahkan event handler di sini juga
				>
					Sort by Relevancy
					<div>
						<img
							src={downIcon}
							alt="Down"
							className="min-w-9 h-8"
						/>
					</div>
				</button>
			</div>
		</div>
	);
};
