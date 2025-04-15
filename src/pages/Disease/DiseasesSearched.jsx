import { SearchBar } from '../../component/SearchBar.jsx';
import { Banner } from '../../component/Banner.jsx';
import diseaseHero from '../../assets/disease.jpg';
import { ListWords } from '../../component/Disease/ListWords.jsx';
import { DiseaseCard } from '../../component/Disease/DiseaseCard.jsx';

export function DiseasesSearched() {
    return (
        <>
            <section className="min-h-screen mt-[100px] lg:mt-[160px] mb-4">
                <div className="w-full flex  gap-2 items-center mb-4">
                    <SearchBar />
                </div>

                <div className="grid grid-cols-1 w lg:grid-cols-3 gap-x-0 gap-y-4  lg:gap-4 my-4 lg:my-12">
                    <DiseaseCard />
                    <DiseaseCard />
                    <DiseaseCard />
                    <DiseaseCard />
                </div>
            </section>
        </>
    );
}
