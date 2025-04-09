import data from "./../../data/disease.json"
import {DiseaseCard} from "./DiseaseCard.jsx";

export const DiseaseList = () => {
  const diseases = data.map(item => {
    const key = Object.keys(item)[0];
    const value = item[key];
    return {
      name: key.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase()), // contoh: asthma_bronchiale => Asthma Bronchiale
      gejala: value.gejala?.umum?.[0]?.split(":")?.[0] || "Gejala tidak tersedia", // ambil gejala pertama sebelum titik dua
      deskripsi: value.definisi.split(".")[0] + "." // ambil kalimat pertama
    };
  });

  return (
    <>
      {diseases.map((disease, index) => (
        <DiseaseCard
          key={index}
          name={disease.name}
          gejala={disease.gejala}
          deskripsi={disease.deskripsi}
        />
      ))}
    </>
  )
}