
export default function FindFacility (data) {
  const allFacilities = data.flatMap(clinic => clinic.facilities);

  const normalize = str => str.toLowerCase().replace(/\s+/g, ' ').trim();

  const uniqueFacilitiesMap = new Map();
  allFacilities.forEach(facility => {
    const key = normalize(facility);
    if (!uniqueFacilitiesMap.has(key)) {
      uniqueFacilitiesMap.set(key, facility);
    }
  });

  const uniqueFacilities = Array.from(uniqueFacilitiesMap.values());

  return uniqueFacilities;
}