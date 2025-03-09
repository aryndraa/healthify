import { useParams } from "react-router-dom";
import { drugData } from "./drugsdta";

export function DrugDetail() {
	const { id } = useParams(); 
	const drug = drugData.find((item) => item.id === parseInt(id)); // Cari obat sesuai ID

	if (!drug) {
		return (
			<h1 className="text-center text-2xl font-bold">
				Obat tidak ditemukan
			</h1>
		);
	}

	return (
		<div>
            
        </div>
	);
}
