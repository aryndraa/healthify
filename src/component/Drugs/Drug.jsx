import { useNavigate } from "react-router-dom";

export function DrugCard({ pricing, title, standFor, illustration, drugLevel, id }) {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate(`/drugs/${id}`)
	}

	return (
		<div className="items">
			<div
				onClick={handleClick}
				className="md:w-[408px] h-[400px] md:h-[500px]  hover:cursor-pointer  bg-center bg-no-repeat  2xl:bg-cover"
				style={{
					backgroundImage: `url(${illustration})`,
				}}
			>
				<div className="justify-between flex flex-col rounded-[40px] py-4 px-2 shadow-lg  h-[400px] md:h-[500px]  bg-slate-500 bg-opacity-10">
					<div className="  bg-white text-gray-800 font-semibold w-fit px-6 text--lg py-4 rounded-full ">
						{pricing}
					</div>

					<div className="flex justify-between items-center bg-white rounded-[40px] px-4">
						<div className="px-[22px] py-[15px] md:py-[22px] flex flex-col ">
							<h2 className="font-semibold text--2xl">{title}</h2>
							<p className="text-gray-600 text-sm">{standFor}</p>
						</div>
						<div>
							<img
								src={drugLevel}
								alt="Drug Level"
								className="w-8 2xl:w-12 mt-2"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}