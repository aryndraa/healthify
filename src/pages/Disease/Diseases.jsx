import {SearchBar} from "../../component/SearchBar.jsx";
import {Banner} from "../../component/Banner.jsx";
import diseaseHero from "../../assets/disease.jpg";
import {ListWords} from "../../component/Disease/ListWords.jsx";
import {DiseaseList} from "../../component/Disease/DiseaseList.jsx";
import {useDisease} from "../../contexts/DiseaseContext.jsx";
import {useEffect, useState} from "react";

export function Diseases() {
  const {search, setSearch, letterSelect, setLetterSelect} = useDisease();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (search && search.length > 0) {
      setIsLoading(true);
      const delay = setTimeout(() => {
        setIsLoading(false);
      }, 800	);

      return () => clearTimeout(delay);
    } else {
      setIsLoading(false);
    }

    if(letterSelect !== "all") {
      setIsLoading(true);
      const delay = setTimeout(() => {
        setIsLoading(false);
      }, 800	);

      setSearch('')

      return () => clearTimeout(delay);
    } else {
      setIsLoading(false);
    }

  }, [search, letterSelect]);


  return (
    <>
      <section className="max-h-fit  mb-4">
        <div className="w-full flex  gap-2 items-center mb-4">
            <SearchBar
              placeholder={"Search Disease on our listing"}
              value={letterSelect}
              onSearch={setSearch}
              onclick={() => setLetterSelect("all")}
            />
        </div>

        {
          search && search.length > 0 || letterSelect !== "all"  ?
            ""
            :
            <Banner
              image={diseaseHero}
              title="Explore Diseases for Better Health Awareness "
              text="Gain insights into various diseases, their symptoms, prevention methods, and treatment options to empower your health journey."
            />
        }

        <div className="grid grid-cols-1  lg:grid-cols-3 gap-x-0 gap-y-4  lg:gap-4 my-4 lg:my-8 2xl:my-12">
          <ListWords/>
          <div className={`${ search && search.length > 0  ? "col-span-2 " : "col-span-2"}`}>
            <DiseaseList search={search} loading={isLoading} />
          </div>
        </div>
      </section>

    </>
  )
}