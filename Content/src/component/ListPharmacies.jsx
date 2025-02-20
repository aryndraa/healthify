import { PharmacyCard } from "./PharmacyCard"

export const ListPharmacies = () => {
  return (
    <div className="grid grid-cols-3">
      <PharmacyCard/>
      <PharmacyCard/>
      <PharmacyCard/>
    </div>
  )
}
