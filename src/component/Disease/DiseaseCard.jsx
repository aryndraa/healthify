import { Link } from 'react-router-dom';

export const DiseaseCard = ({ id, name, gejala, deskripsi, loading }) => {
    return (
        <Link to={`/disease/${id}`} className="p-4 relative lg:p-6 2xl:p-8 bg-white min-w-full h-full rounded-xl lg:rounded-xxl hover:text-white hover:bg-secondary transition ease-in-out">
            <h2 className="text-xl capitalize mb-4 lg:text-2xl font-semibold lg:mb-6 2xl:mb-12">{name}</h2>
            <div>
                <h3 className=" 2xl:text-lg mb-1">
                    Gejala : <span className="font-semibold">{gejala.map(item => item.split(':')[0].trim()).join(', ')} </span>
                </h3>

                <p className="text-sm lg:text-base 2xl:text-lg lg:text-sm">{deskripsi}....</p>
            </div>
            {loading ? (
                <>
                    <div className="bg-white rounded-xl lg:rounded-xxl absolute inset-0" />
                    <div className="bg-neutral-300 animate-pulse rounded-xl lg:rounded-xxl absolute inset-0" />
                </>
            ) : (
                ''
            )}
        </Link>
    );
};
