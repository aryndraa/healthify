import {SearchBar} from "../../component/SearchBar.jsx";
import {ShortBy} from "../../component/ShortBy.jsx";
import {ListPharmacies} from "../../component/Pharmacy/ListPharmacies.jsx";

export function PharmaciesSearched ()  {
  return (
    <>
      <section className="min-h-screen mt-[100px] lg:mt-[160px] mb-4">

        <div className="w-full flex  gap-2 items-center mb-4">
          <SearchBar/>
          <ShortBy/>
        </div>

        <div>
          <ListPharmacies/>
        </div>
      </section>
    </>
  )
}