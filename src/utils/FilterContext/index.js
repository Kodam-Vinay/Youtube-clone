import { createContext } from "react";

const FilterContext = createContext({
  activeFilterButton: "0",
  setActiveFilterButton: () => {},
  catergoriesList: [],
});
export default FilterContext;
