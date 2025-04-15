import { SearchBar } from '../../component/SearchBar';
import drugsImage from '../../assets/drugs.png';
import xIcon from '../../assets/x-icon.svg';
import { DrugCard } from '../../component/Drugs/Drug';
import { drugData } from './drugsdta';
import { useState, useEffect } from 'react';
import { Filter } from '../../component/Drugs/FilterDrug';

import { DrugsHero } from '../../component/Drugs/drugHero';
import { ActiveFilterTags } from '../../component/Drugs/tagsDrug';
import { FilterPanel } from '../../component/Drugs/FIlterPanelDrug';

export function Drugs() {
    const [searchQuery, setSearchQuery] = useState('');
    const [active, setActive] = useState(false);
    const [clearTrigger, setClearTrigger] = useState(false);
    const [tagsActive, setTagsActive] = useState([]);
    const [filteredDrugs, setFilteredDrugs] = useState(drugData);

    const level = ['Over-the-counter', 'Limited Over-the-Counter', 'Herbal', 'Hard Drugs', 'Narcotics'];
    const tags = ['Flu', 'Cough', 'Fever', 'Pain', 'Acid', 'Digestion', 'Allergy', 'Vitamins', 'Antibiotics', 'Eyes', 'Heart', 'Diabetes', 'Asthma', 'Women', 'Men', 'Sleep', 'Muscle', 'Wounds'];

    const toggleTag = tag => {
        setTagsActive(prev => (prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]));
    };

    const clearFilters = () => {
        setTagsActive([]);
    };

    useEffect(() => {
        let filtered = drugData;

        if (tagsActive.length > 0) {
            filtered = filtered.filter(drug => tagsActive.some(tag => drug.Tags.includes(tag) || drug.Level.includes(tag)));
        }

        if (searchQuery) {
            filtered = filtered.filter(drug => drug.title.toLowerCase().includes(searchQuery.toLowerCase()));
        }

        setFilteredDrugs(filtered);
    }, [tagsActive, searchQuery]);

    return (
        <div className="relative min-h-screen mb-4">
            <div className="w-full flex gap-2 items-center mb-4">
                <SearchBar clearTrigger={clearTrigger} onSearch={setSearchQuery} placeholder="Search Drugs on our listing" />
                <Filter onClick={() => setActive(prev => !prev)} />
            </div>
            <FilterPanel active={active} toggleActive={() => setActive(false)} tags={tags} level={level} tagsActive={tagsActive} toggleTag={toggleTag} />

            <ActiveFilterTags tagsActive={tagsActive} clearFilters={clearFilters} />

            {!searchQuery && tagsActive.length === 0 && <DrugsHero />}

            {/* Drug List */}
            {filteredDrugs.length > 0 ? (
                <div className="w-full grid gap-4 grid-cols-1 min-[320px]:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-4">
                    {filteredDrugs.slice(0, 12).map(drug => (
                        <DrugCard key={drug.id} id={drug.id} pricing={drug.pricing} title={drug.title} standFor={drug.standFor} illustration={drug.ilustration} drugLevel={drug.drugLevel} />
                    ))}
                </div>
            ) : (
                <div className="w-full flex flex-col items-center justify-center py-10 text-zinc-500 text-lg">
                    <h1 className="text-5xl mb-4">404 Not Found</h1>
                    <p>No Drugs found.</p>
                    <button
                        onClick={() => {
                            setSearchQuery('');
                            setTagsActive([]);
                            setClearTrigger(prev => !prev);
                        }}
                        className="mt-4 underline text-blue-500"
                    >
                        Reset Search
                    </button>
                </div>
            )}
        </div>
    );
}
