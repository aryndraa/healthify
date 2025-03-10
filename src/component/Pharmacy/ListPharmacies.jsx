import { PharmacyClinicCard } from "../PharmacyClinicCard.jsx"

export const ListPharmacies = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-4  rounded-xl">
      <PharmacyClinicCard/>
      <PharmacyClinicCard/>
      <PharmacyClinicCard/>
      <PharmacyClinicCard/>
      <PharmacyClinicCard/>
      <PharmacyClinicCard/>
    </div>
  )
}
