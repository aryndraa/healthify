import xIcon from "../../assets/x-icon.svg";
import { TagButton } from "./Tagbtn";

export function FilterPanel({
	tagsActive,
	toggleTag,
	tags,
	topics,
	diseases,
	authors,
	onClose,
}) {
	return (
		<div className="w-full grid grid-cols-4 absolute z-10">
			<div className="col-span-4 md:col-span-3 md:col-start-2 bg-white p-8 rounded-xl">
				<div className="flex justify-end">
					<button onClick={onClose}>
						<img src={xIcon} alt="Close" />
					</button>
				</div>

				{[
					{ label: "Tags", data: tags },
					{ label: "Topics", data: topics },
					{ label: "Diseases", data: diseases },
					{ label: "Authors", data: authors },
				].map((section, index) => (
					<div key={index} className="mt-4">
						<p className="font-medium text-xl">{section.label}</p>
						<hr />
						<div className="tags mt-4 flex gap-3 flex-wrap">
							{section.data.map((item, idx) => (
								<TagButton
									key={idx}
									label={item}
									isActive={tagsActive.includes(item)}
									onClick={() => toggleTag(item)}
								/>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
