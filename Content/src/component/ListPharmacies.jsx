import { PharmacyCard } from "./PharmacyCard"

export const ListPharmacies = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <PharmacyCard/>
      <PharmacyCard/>
      <PharmacyCard/>
      <PharmacyCard/>
      <PharmacyCard/>
      <PharmacyCard/>
    </div>
  )
}
