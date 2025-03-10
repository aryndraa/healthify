import {SearchBar} from "../../component/SearchBar.jsx";
import {ShortBy} from "../../component/ShortBy.jsx";
import {Banner} from "../../component/Banner.jsx";
import diseaseHero from "../../assets/disease.jpg";
import {ListWords} from "../../component/Disease/ListWords.jsx";
import {DiseaseCard} from "../../component/Disease/DiseaseCard.jsx";

export function Diseases() {
  return (
    <>
      <section className="min-h-screen mt-[100px] lg:mt-[160px] mb-4">
        <div className="w-full flex  gap-2 items-center mb-4">
          <SearchBar/>
          <ShortBy/>
        </div>

        <Banner
          image={diseaseHero}
          title="Discover Reliable Drug Information for Safe and Informed Healthcare"
          text="Explore a complete database of trusted drug information, including uses, dosages, side effects, precautions, interactions, and safety guidelines, to make well-informed healthcare decisions for yourself and your loved ones."
        />

        <div className="grid grid-cols-3 gap-4">
          <ListWords/>
          <div className="grid grid-cols-2 col-span-2 gap-4">
            <DiseaseCard/>
            <DiseaseCard/>
            <DiseaseCard/>
            <DiseaseCard/>
          </div>
        </div>
      </section>

    </>
  )
}