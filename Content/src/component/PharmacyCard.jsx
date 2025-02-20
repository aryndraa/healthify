export const PharmacyCard = () => {
  return (
    <div className="relative w-[550px] h-[450px]">
      <img 
        src="https://images.unsplash.com/photo-1604145942179-63cd583fcf64?q=80&w=3041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt=""
        className="w-full h-[450px] object-cover rounded-xxl"
      />
      <div className="absolute bottom-0 right-0 left-0 m-2 bg-white rounded-xxl p-6 ">
        <div className="flex items-center gap-4 mb-3">
          <span className="px-6 bg-secondary text-white rounded-xxl py-1 text-lg font-medium">Open</span>
          <p className="text-lg font-medium">24 Hours</p>
        </div>        
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-semibold">
              Apotek Kimia Farma Diponegoro
            </h3>
            <p className="text-lg font-medium opacity-80">Community Pharmacies</p>
          </div>
          <span className="text-3xl text-secondary font-semibold">2 KM</span>
        </div>
      </div>
    </div>
  )
}
