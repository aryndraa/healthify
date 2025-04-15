import xIcon from '../../assets/x-icon.svg';

export function FilterPanel({ active, toggleActive, tags, level, tagsActive, toggleTag }) {
    if (!active) return null;

    return (
        <div className="w-full grid grid-cols-4 absolute z-10">
            <div className="col-span-4 md:col-span-3 md:col-start-2 bg-white p-8 rounded-xl">
                <div className="flex justify-end">
                    <button onClick={toggleActive}>
                        <img src={xIcon} alt="Close" />
                    </button>
                </div>

                {/* Types */}
                <div>
                    <p className="font-medium text-xl">Types</p>
                    <hr />
                    <div className="tags mt-4 flex gap-3 flex-wrap">
                        {tags.map((tag, index) => (
                            <button
                                key={index}
                                onClick={() => toggleTag(tag)}
                                className={`border border-[#213170] rounded-full px-4 py-2 transition-colors duration-300 ${
                                    tagsActive.includes(tag) ? 'bg-[#213170] text-white' : 'hover:bg-[#213170] hover:text-white'
                                }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Level */}
                <div className="mt-4">
                    <p className="font-medium text-xl">Level</p>
                    <hr />
                    <div className="tags mt-4 flex gap-3 flex-wrap">
                        {level.map((tag, index) => (
                            <button
                                key={index}
                                onClick={() => toggleTag(tag)}
                                className={`border border-[#213170] rounded-full px-4 py-2 transition-colors duration-300 ${
                                    tagsActive.includes(tag) ? 'bg-[#213170] text-white' : 'hover:bg-[#213170] hover:text-white'
                                }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
