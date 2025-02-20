import { SearchBar } from "../../component/SearchBar";
import { ShortBy } from "../../component/ShortBy";

export function Pharmacy() {
  return (
    <>
      <section className="min-h-screen mt-[160px]">
        <div className="w-full flex gap-2 items-center">
          <SearchBar/>
          <ShortBy/>
        </div>
      </section>
    </>
  )
}