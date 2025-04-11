import {PharmacyClinicCard} from "../PharmacyClinicCard.jsx";
import {clinics} from "../../pages/Clinic/clinicData.js";

export const ListClinics = ({isLoading}) => {


  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2  lg:gap-4 rounded-xl">
      {
        clinics.map((item) => (
          <PharmacyClinicCard
            key={item.id}
            img={item.images[0]}
            name={item.name}
            type={item.type}
            id={item.id}
            loading={isLoading}
          />
        ))
      }
    </div>

  )
}