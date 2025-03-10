import { PharmacyCard } from "./PharmacyCard.jsx"

export const ListPharmacies = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3  md:gap-4 px-5 lg:px-0 bg-white lg:bg-transparent rounded-xl">
      <PharmacyCard/>
      <PharmacyCard/>
      <PharmacyCard/>
      <PharmacyCard/>
      <PharmacyCard/>
      <PharmacyCard/>
    </div>
  )
}
