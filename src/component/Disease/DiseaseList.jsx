import {DiseaseCard} from "./DiseaseCard.jsx";
import {dieases} from "../../pages/Disease/diseaseData.js";

export const DiseaseList = () => {

  return (
    <>
      {dieases.map((item, index) => (
        <DiseaseCard
          key={index}
          name={item.name}
          deskripsi={item.definisi.substring(0, 140)}
          gejala={item.gejala.find(g => g.name === "umum").list}
        />
      ))}
    </>
  )
}