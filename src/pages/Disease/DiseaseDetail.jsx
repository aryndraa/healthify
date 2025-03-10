import {TabBar} from "../../component/Disease/TabBar.jsx";
import {useState} from "react";
import {DiseaseInfo} from "../../component/Disease/DiseaseInfo.jsx";
import {MoreLink} from "../../component/MoreLink.jsx";
import {DiseaseCard} from "../../component/Disease/DiseaseCard.jsx";

export function DiseaseDetail() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabInfo = () => {
    if(activeTab === "overview") {
      return(
        <>
          <DiseaseInfo title="Definition">
            <p className="text-lg leading-[1.6]">
              Asthma bronkial adalah penyakit pernapasan kronis yang ditandai dengan peradangan dan
              penyempitan saluran napas, yang menyebabkan kesulitan bernapas, batuk, dan mengi. Kondisi
              ini dapat bervariasi dalam tingkat keparahan dan frekuensi serangan, memerlukan pengelolaan
              yang tepat untuk menjaga kualitas hidup penderita. Asma sering kali dipicu oleh berbagai faktor
              lingkungan dan genetik.
            </p>
          </DiseaseInfo>
          <DiseaseInfo title="Cause">
            <ul className="list-disc pl-4 text-lg">
              <li>Alergen (seperti debu, serbuk sari, dan bulu hewan)</li>
              <li>Iritan (seperti asap rokok, polusi udara, dan bahan kimia)</li>
              <li>Infeksi saluran pernapasan</li>
              <li>Aktivitas fisik (terutama di lingkungan dingin atau kering)</li>
              <li>Stres emosional</li>
            </ul>
          </DiseaseInfo>
          <DiseaseInfo title="Complication">
            <p className="text-lg leading-[1.6]">
              Jika tidak dikelola dengan baik, asma dapat menyebabkan serangan parah yang mengancam jiwa,
              serta perubahan permanen pada saluran napas yang dapat mengurangi fungsi paru-paru dan kualitas
              hidup penderita.
            </p>
          </DiseaseInfo>
        </>
      )
    } else if(activeTab === "symptom") {
      return(
        <>
          <DiseaseInfo title="Common Symptoms">
            <ul className="list-disc pl-4 text-lg">
              <li>Sesak Napas: Kesulitan bernapas saat beraktivitas atau di malam hari, dengan perasaan tekanan di dada.</li>
              <li>Batuk: Batuk kronis yang memburuk di malam hari atau saat berolahraga, bisa kering atau berdahak.</li>
              <li>Wheezing: Suara mengi saat bernapas, terutama saat mengeluarkan napas, akibat penyempitan saluran napas.</li>
              <li>Nyeri Dada: Ketidaknyamanan di dada akibat ketegangan otot pernapasan saat bernapas dalam-dalam.</li>
              <li>Kelelahan: Kelelahan akibat usaha ekstra untuk bernapas, sering terjadi setelah serangan.</li>
            </ul>
          </DiseaseInfo>
          <DiseaseInfo title="Specific Symptoms">
            <ul className="list-disc pl-4 text-lg">
              <li>Sesak Napas: Kesulitan bernapas saat beraktivitas atau di malam hari, dengan perasaan tekanan di dada.</li>
              <li>Batuk: Batuk kronis yang memburuk di malam hari atau saat berolahraga, bisa kering atau berdahak.</li>
              <li>Wheezing: Suara mengi saat bernapas, terutama saat mengeluarkan napas, akibat penyempitan saluran napas.</li>
              <li>Nyeri Dada: Ketidaknyamanan di dada akibat ketegangan otot pernapasan saat bernapas dalam-dalam.</li>
              <li>Kelelahan: Kelelahan akibat usaha ekstra untuk bernapas, sering terjadi setelah serangan.</li>
            </ul>
          </DiseaseInfo>
          <DiseaseInfo title="Stages of Symptoms">
            <ul className="list-disc pl-4 text-lg">
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
            <ul className="list-disc pl-4 text-lg ">
              <li>Inhaler bronkodilator untuk meredakan gejala.</li>
              <li>Obat anti-inflamasi (kortikosteroid) untuk mengurangi peradangan.</li>
           </ul>
         </DiseaseInfo>
          <DiseaseInfo title="Self Care">
            <ul className="list-disc pl-4 text-lg ">
              <li>Inhaler bronkodilator untuk meredakan gejala.</li>
              <li>Obat anti-inflamasi (kortikosteroid) untuk mengurangi peradangan.</li>
           </ul>
         </DiseaseInfo>
          <DiseaseInfo title="Alternative">
            <ul className="list-disc pl-4 text-lg ">
              <li>Inhaler bronkodilator untuk meredakan gejala.</li>
              <li>Obat anti-inflamasi (kortikosteroid) untuk mengurangi peradangan.</li>
           </ul>
         </DiseaseInfo>
          <DiseaseInfo title="Durasi Perawatan">
            <p className="text-lg leading-[1.6]">
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

        <div className="flex gap-4">
          <div>
            <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className=" rounded-xxl bg-white mt-4 p-12">
              <div className="pb-8 mb-8 border-b border-b-text ">
                <h1 className="text-4xl font-bold mb-2">Asthma Bronchiale</h1>
                <p className="text-xl font-medium">Penyakit Pernafasan yang menyerang paru - paru</p>
              </div>
              <div className="flex flex-col gap-6">
                {tabInfo()}
              </div>
            </div>
          </div>
          <div className="min-w-[549px] h-[549px] bg-gray-300 rounded-xxl"></div>
        </div>
      </section>

      <section className="mb-12">
        <div className="mb-4">
          <MoreLink name={"More Disease"}/>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <DiseaseCard/>
          <DiseaseCard/>
          <DiseaseCard/>
          <DiseaseCard/>
          <DiseaseCard/>
          <DiseaseCard/>
        </div>
      </section>

    </>
  )
}