import {SearchBar} from "../../component/SearchBar.jsx";
import {Banner} from "../../component/Banner.jsx";
import diseaseHero from "../../assets/disease.jpg";
import {ListWords} from "../../component/Disease/ListWords.jsx";
import {DiseaseList} from "../../component/Disease/DiseaseList.jsx";
import {useDisease} from "../../contexts/DiseaseContext.jsx";
import {useEffect, useState} from "react";

export function Diseases() {
  const {search, setSearch, letterSelect} = useDisease();
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

      return () => clearTimeout(delay);
    } else {
      setIsLoading(false);
    }

  }, [search, letterSelect]);


  return (
    <>
      <section className="min-h-screen mt-[100px] lg:mt-[160px] mb-4">
        <div className="w-full flex  gap-2 items-center mb-4">
          {
            letterSelect === "all" &&
            <SearchBar
              placeholder={"Search Disease on our listing"}
              onSearch={setSearch}
            />
          }
        </div>

        {
          search && search.length > 0 || letterSelect !== "all"  ?
            ""
            :
            <Banner
              image={diseaseHero}
              title="Discover Reliable Drug Information for Safe and Informed Healthcare"
              text="Explore a complete database of trusted drug information, including uses, dosages, side effects, precautions, interactions, and safety guidelines, to make well-informed healthcare decisions for yourself and your loved ones."
            />
        }

        <div className="grid grid-cols-1 w lg:grid-cols-3 gap-x-0 gap-y-4  lg:gap-4 my-4 lg:my-12">
          {
            search && search.length > 0 ?
              ""
              :
              <ListWords/>
          }
          <div className={`${ search && search.length > 0  ? "col-span-3 " : "col-span-2"}`}>
            <DiseaseList search={search} loading={isLoading} />
          </div>
        </div>
      </section>

    </>
  )
}