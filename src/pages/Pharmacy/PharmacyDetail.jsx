import { MapsView } from '../../component/MapsView.jsx';
import { useParams } from 'react-router-dom';
import { pharmacies } from './pharmachyData.js';
import { drugData } from '../Drugs/drugsdta.js';
import { DrugCard } from '../../component/Drugs/Drug.jsx';
import { MoreLink } from '../../component/MoreLink.jsx';
import { useEffect, useState } from 'react';
import searchIcon from '../../assets/search.svg';
import { PharmacyClinicCard } from '../../component/PharmacyClinicCard.jsx';

export function PharmacyDetail() {
    const [filteredDrugs, setFilteredDrugs] = useState(drugData);
    const [searchQuery, setSearchQuery] = useState('');
    const { id } = useParams();
    const pharmacy = pharmacies.find(p => p.id === parseInt(id));
    useEffect(() => {
        let filtered = drugData;

        if (searchQuery) {
            filtered = filtered.filter(drug => drug.title.toLowerCase().includes(searchQuery.toLowerCase()));
        }

        setFilteredDrugs(filtered);
    }, [searchQuery]);

    const randomPharmacy = pharmacies
        .filter(p => p.id !== parseInt(id))
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    console.log(id);

    return (
        <>
            <section className="min-h-screen mb-4">
                <div className="flex flex-col-reverse lg:flex-row gap-4 mb-6 lg:mb-14 2xl:mb-24">
                    <img src={pharmacy.image} alt="" className="h-[220px] 2xl:h-[549px] lg:h-[420px] p-4 lg:p-0 bg-white lg:bg-transparent  object-cover rounded-xxl  lg:rounded-xxl" />

                    <div className="w-full flex flex-col gap-4 bg-white lg:bg-transparent p-4 lg:p-0 rounded-lg">
                        <div className="bg-white rounded-lg lg:rounded-xxl flex flex-col lg:flex-row justify-between p-0 lg:p-8 2xl:p-12">
                            <div className="w-full lg:w-[65%] 2xl:w-[60%] mb-2">
                                <h1 className="text-xl lg:text-3xl 2xl:text-5xl lg:mb-4 2xl:mb-6 font-semibold leading-8">{pharmacy.name}</h1>
                                <p className="text-sm lg:text-base 2xl:text-lg">{pharmacy.address}</p>
                            </div>
                            <div className="flex h-fit items-center gap-4 text-sm lg:text-lg 2xl:text-2xl">
                                <span>{pharmacy.time}</span>
                                <span className="bg-secondary h-fit py-1 px-4 lg:px-6 rounded-full text-white">Open</span>
                            </div>
                        </div>
                        <div>
                            <MapsView map={pharmacy.address_link} />
                        </div>
                    </div>
                </div>

                <div>
                    <div className="w-full flex  gap-2 items-center mb-4">
                        <form className="flex w-full bg-white rounded-full" onSubmit={e => e.preventDefault()}>
                            <input
                                type="text"
                                className="flex-1 w-full py-4 2xl:py-7 px-8 2xl:px-12 placeholder:text-zinc-400 rounded-full 2xl:text-xl focus:outline-none placeholder:font-medium"
                                onChange={e => setSearchQuery(e.target.value)}
                                placeholder="Search for drugs..."
                            />
                            <button type="submit" className="bg-trinary p-5 2xl:p-6 rounded-full">
                                <img src={searchIcon} alt="Search" className="w-5 2xl:w-8" />
                            </button>
                        </form>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {filteredDrugs.slice(0, 12).map(drug => (
                            <DrugCard key={drug.id} id={drug.id} pricing={drug.pricing} title={drug.title} standFor={drug.standFor} illustration={drug.ilustration} drugLevel={drug.drugLevel} />
                        ))}
                    </div>
                </div>

                <div className="mt-12">
                    <MoreLink name={'More Pharmacy'} />
                    <div className="grid grid-cols-1 lg:grid-cols-3 mt-2 lg:mt-4 gap-2 lg:gap-4">
                        {randomPharmacy.map((item, index) => (
                            <PharmacyClinicCard key={index} name={item.name} type={item.type} id={`/pharmacy/${id}`} img={item.image} time={item.time} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
