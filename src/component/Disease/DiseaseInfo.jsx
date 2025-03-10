export const DiseaseInfo = ({title, children}) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-lg leading-[1.6]">
        {children}
      </p>
    </div>
  )
}