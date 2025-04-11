import {TabBar} from "../../component/Disease/TabBar.jsx";
import {useState} from "react";
import {DiseaseInfo} from "../../component/Disease/DiseaseInfo.jsx";
import {MoreLink} from "../../component/MoreLink.jsx";
import {DiseaseCard} from "../../component/Disease/DiseaseCard.jsx";
import {useParams} from "react-router-dom";
import {dieases} from "./diseaseData.js";
import {pharmacies} from "../Pharmacy/pharmachyData.js";

export function DiseaseDetail() {
  const [activeTab, setActiveTab] = useState("overview");

  const {id} = useParams();

  console.log(name);
  const detail = dieases.find((p) => p.id === parseInt(id));

  const randomDiseases = dieases
    .filter((p) => p.id !== parseInt(id))
    .sort(() => Math.random() - 0.5)
    .slice(0, 6);

  const tabInfo = () => {
    if(activeTab === "overview") {
      return(
        <>
          <DiseaseInfo title="Definisi">
            <p className=" leading-[1.6]">
              {detail.definisi}
            </p>
          </DiseaseInfo>
          <DiseaseInfo title="Cause">
            <ul className="list-disc pl-4 ">
              {detail.penyebab.map((item, index) => (
                <li key={index}>{item.trim()}</li>
              ))}
            </ul>
          </DiseaseInfo>
          <DiseaseInfo title="Complication">
            <p className=" leading-[1.6]">
              {detail.komplikasi}
            </p>
          </DiseaseInfo>
        </>
      )
    } else if(activeTab === "symptom") {
      return(
        <>
          <DiseaseInfo title="Common Symptoms">
            <ul className="list-disc pl-4 ">
              <li>Sesak Napas: Kesulitan bernapas saat beraktivitas atau di malam hari, dengan perasaan tekanan di dada.</li>
              <li>Batuk: Batuk kronis yang memburuk di malam hari atau saat berolahraga, bisa kering atau berdahak.</li>
              <li>Wheezing: Suara mengi saat bernapas, terutama saat mengeluarkan napas, akibat penyempitan saluran napas.</li>
              <li>Nyeri Dada: Ketidaknyamanan di dada akibat ketegangan otot pernapasan saat bernapas dalam-dalam.</li>
              <li>Kelelahan: Kelelahan akibat usaha ekstra untuk bernapas, sering terjadi setelah serangan.</li>
            </ul>
          </DiseaseInfo>
          <DiseaseInfo title="Specific Symptoms">
            <ul className="list-disc pl-4 ">
              <li>Sesak Napas: Kesulitan bernapas saat beraktivitas atau di malam hari, dengan perasaan tekanan di dada.</li>
              <li>Batuk: Batuk kronis yang memburuk di malam hari atau saat berolahraga, bisa kering atau berdahak.</li>
              <li>Wheezing: Suara mengi saat bernapas, terutama saat mengeluarkan napas, akibat penyempitan saluran napas.</li>
              <li>Nyeri Dada: Ketidaknyamanan di dada akibat ketegangan otot pernapasan saat bernapas dalam-dalam.</li>
              <li>Kelelahan: Kelelahan akibat usaha ekstra untuk bernapas, sering terjadi setelah serangan.</li>
            </ul>
          </DiseaseInfo>
          <DiseaseInfo title="Stages of Symptoms">
            <ul className="list-disc pl-4 ">
              <li>Sesak Napas: Kesulitan bernapas saat beraktivitas atau di malam hari, dengan perasaan tekanan di dada.</li>
              <li>Batuk: Batuk kronis yang memburuk di malam hari atau saat berolahraga, bisa kering atau berdahak.</li>
              <li>Wheezing: Suara mengi saat bernapas, terutama saat mengeluarkan napas, akibat penyempitan saluran napas.</li>
              <li>Nyeri Dada: Ketidaknyamanan di dada akibat ketegangan otot pernapasan saat bernapas dalam-dalam.</li>
              <li>Kelelahan: Kelelahan akibat usaha ekstra untuk bernapas, sering terjadi setelah serangan.</li>
            </ul>
          </DiseaseInfo>

        </>
      )
    } else if(activeTab === "treatments") {
      return (
        <>
          <DiseaseInfo title="Medical Treatment">
            <ul className="list-disc pl-4  ">
              <li>Inhaler bronkodilator untuk meredakan gejala.</li>
              <li>Obat anti-inflamasi (kortikosteroid) untuk mengurangi peradangan.</li>
           </ul>
         </DiseaseInfo>
          <DiseaseInfo title="Self Care">
            <ul className="list-disc pl-4  ">
              <li>Inhaler bronkodilator untuk meredakan gejala.</li>
              <li>Obat anti-inflamasi (kortikosteroid) untuk mengurangi peradangan.</li>
           </ul>
         </DiseaseInfo>
          <DiseaseInfo title="Alternative">
            <ul className="list-disc pl-4  ">
              <li>Inhaler bronkodilator untuk meredakan gejala.</li>
              <li>Obat anti-inflamasi (kortikosteroid) untuk mengurangi peradangan.</li>
           </ul>
         </DiseaseInfo>
          <DiseaseInfo title="Durasi Perawatan">
            <p className=" leading-[1.6]">
              Pengobatan asma bersifat jangka panjang dan memerlukan pemantauan rutin untuk menyesuaikan pengobatan sesuai kebutuhan.
            </p>
          </DiseaseInfo>

        </>

      )
    }
  }

  return (
    <>
      <section className="mt-[100px] lg:mt-[160px] mb-4">

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="rounded-xl lg:rounded-xxl bg-white mt-4 p-4 lg:p-8 2xl:p-12">
              <div className="mb-4 pb-4 lg:mb-6 lg:pb-6 2xl:pb-8 2xl:mb-8 border-b border-b-text ">
                <h1 className="text-2xl lg:text-3xl 2xl:text-4xl font-semibold lg:font-bold mb-1 2xl:mb-2 capitalize">{detail.name}</h1>
              </div>
              <div className="flex flex-col gap-4 2xl:gap-6">
                {tabInfo()}
              </div>
            </div>
          </div>
          <img src={detail.img} className="min-w-full h-[200px] lg:min-w-[420px] lg:h-[420px] 2xl:min-w-[549px] 2xl:h-[549px] bg-gray-300 rounded-xl lg:rounded-xxl"></img>
        </div>
      </section>

      <section className="mb-12">
        <div className="mb-2 lg:mb-4">
          <MoreLink name={"More Disease"}/>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4">
          {
            randomDiseases.map((item, index) => (
              <DiseaseCard
                key={index}
                id={item.id}
                name={item.name}
                deskripsi={item.definisi.substring(0, 140)}
                gejala={item.gejala.find(g => g.name === "umum").list}
              />
            ))
          }
        </div>
      </section>

    </>
  )
}