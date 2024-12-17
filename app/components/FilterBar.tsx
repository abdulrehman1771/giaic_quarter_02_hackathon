import { HiViewGrid } from "react-icons/hi";
import { FaList } from "react-icons/fa";


export default function FilterBar(props:{head:string}) {
  return (
    <>
      <div className="flex gap-2 lg:flex-row flex-col justify-between">
        <div className="">
          <h1 className="josefin-sans text-2xl leading-8 font-bold text-[#151875]">
            {props.head}
          </h1>
          <p className="text-[#8A8FB9] text-sm">
            About 9,620 results (0.62 seconds)
          </p>
        </div>
        <div className="flex flex-col md:flex-row font-medium gap-6 items-baseline md:justify-between md:items-center text-[#3F509E] text-lg">
          <div className="flex items-center gap-2">
            <h2>Per Page:</h2>
            <input
              className="w-20 border-2 border-[#E7E6EF]"
              type="text"
              name="pageNumber"
              id="pageNumber"
              title="pageNumber"
            />
          </div>
          <div className="flex items-center gap-2">
            <h2>Sort By:</h2>
            <select
              className="w-32 h-8 bg-transparent border-2 border-[#E7E6EF] text-sm text-[#8A8FB9] text-center"
              name="select"
              id="select"
              title="select"
            >
              <option value="">Best Match</option>
              <option value="">Popular</option>
              <option value="">Rating Above 4.5</option>
              <option value="">Rating Above 4.0</option>
              <option value="">Rating Above 3.5</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <h2>View:</h2>
              <button type="button" title="button">
                <HiViewGrid />
              </button>
              <button type="button" title="button">
                <FaList />
              </button>
            </div>
            <input
              className="w-52 border-2 border-[#E7E6EF]"
              type="text"
              name="searchProducts"
              id="searchProducts"
              title="searchProducts"
            />
          </div>
        </div>
      </div>
    </>
  );
}
