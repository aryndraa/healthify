import { useNavigate } from "react-router-dom";

export function DrugCard({ pricing, title, standFor, illustration, drugLevel, id }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/drugs/${id}`)
  }
  
    return (
		<div
        onClick={handleClick}
        className="justify-between flex flex-col rounded-[40px] py-4 px-2 shadow-lg w-[408px] h-[500px] hover:cursor-pointer"
        style={{
            backgroundImage: `url(${illustration})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
		>
				<div className="  bg-white text-gray-800 font-semibold w-fit px-6 text--lg py-4 rounded-full ">
					{pricing}
				</div>
			
        
			
				<div className="flex justify-between items-center bg-white rounded-[40px] px-4">
					<div className="p-[22px] flex flex-col ">
						<h2 className="font-semibold text--2xl">{title}</h2>
						<p className="text-gray-600 text-sm">{standFor}</p>
					</div>
					<div>
						<img
							src={drugLevel}
							alt="Drug Level"
							className="w-12 h-12 mt-2"
						/>
					</div>
				</div>

		</div>
  );
}