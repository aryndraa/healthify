import {Link} from "react-router-dom";

export const DiseaseCard = ({name, gejala, deskripsi}) => {

  return (
    <Link to={`/disease/${name}`} className="p-4 lg:p-6 2xl:p-8 bg-white h-full rounded-xl lg:rounded-xxl hover:text-white hover:bg-secondary transition ease-in-out">
      <h2 className="text-xl mb-4 lg:text-2xl font-semibold lg:mb-6 2xl:mb-12">{name}</h2>
      <div>
        <h3 className=" 2xl:text-lg mb-1">
          Gejala : <span className="font-semibold">{gejala}</span>
        </h3>

        <p className="text-sm lg:text-base 2xl:text-lg lg:text-sm">
          {deskripsi}
        </p>
      </div>
    </Link>
  )
}