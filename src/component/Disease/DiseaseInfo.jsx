export const DiseaseInfo = ({title, children}) => {
  return (
    <div>
      <h2 className="text-sm lg:text-lg 2xl::text-2xl font-semibold mb-1 2xl:mb-2">{title}</h2>
      <div className="text-xs lg:text-base 2xl:text-lg leading-[1.6]">
        {children}
      </div>
    </div>
  )
}