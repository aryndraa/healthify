import { PharmacyCard } from "./PharmacyCard.jsx"

export const ListPharmacies = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4">
      <PharmacyCard/>
      <PharmacyCard/>
      <PharmacyCard/>
      <PharmacyCard/>
      <PharmacyCard/>
      <PharmacyCard/>
    </div>
  )
}
