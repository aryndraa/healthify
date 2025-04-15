export function FIndType(data) {
    const normalize = str => str.toLowerCase().replace(/\s+/g, ' ').trim();

    const uniqueTypesMap = new Map();

    data.forEach(clinic => {
        const key = normalize(clinic.type);
        if (!uniqueTypesMap.has(key)) {
            uniqueTypesMap.set(key, clinic.type); // Simpan versi original
        }
    });

    const uniqueTypes = Array.from(uniqueTypesMap.values());

    return uniqueTypes;
}
