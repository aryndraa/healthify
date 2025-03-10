import {Link} from "react-router-dom";

export const DiseaseCard = () => {
  return (
    <Link to="1" className="p-8 bg-white h-fit rounded-xxl hover:text-white hover:bg-secondary transition ease-in-out">
      <h2 className="text-2xl font-semibold mb-12">Asthma Bronchiale</h2>
      <div>
        <div className="flex gap-1 text-lg">
          <h3>Gejala : </h3>
          <span className="flex font-semibold">
            Sesak Napas, Batuk Di Malam Hari, Wheezing
          </span>
        </div>
        <p className="text-lg">
          Asma adalah kondisi pernapasan kronis yang ditandai dengan peradangan
          dan penyempitan saluran napas, menyebabkan kesulitan bernapas.
        </p>
      </div>
    </Link>
  )
}