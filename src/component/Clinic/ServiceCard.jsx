export const ServiceCard = () => {
  return (
    <div className="min-w-[320px] p-4 lg:p-6 2xl:p-8 bg-white rounded-xl lg:rounded-xxl hover:bg-secondary hover:text-white group transition duration-300 ">
      <span className="text-[13px] lg:text-base 2xl:text-lg py-1 px-4 border border-black group-hover:border-white group-hover:text-white text-black rounded-full transition duration-300">Service #1</span>
      <div className="mt-4 lg:mt-8 2xl:mt-12">
        <h3 className="font-semibold text-lg 2xl:text-2xl lg:mb-2 2xl:mb-4">General Consultation</h3>
        <p className="text-[13px] lg:text-base 2xl:text-lg">
          Provides medical check-ups and consultations with general practitioners to diagnose, treat, and
          prevent common illnesses. This service includes health assessments, prescription management, and
          lifestyle recommendations to maintain overall well-being.
        </p>
      </div>
    </div>
  )
}