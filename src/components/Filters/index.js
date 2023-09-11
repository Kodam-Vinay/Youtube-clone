import { useContext } from "react";
import FilterButton from "../FilterButton";
import "./style.css";
import FilterContext from "../../utils/FilterContext";

const Filters = () => {
  const { activeFilterButton, setActiveFilterButton, catergoriesList } =
    useContext(FilterContext);
  return (
    <div className="w-full px-2 space-x-3 flex overflow-x-scroll scroll-smooth p-2 hide-scroll">
      {catergoriesList.map((each) => (
        <FilterButton
          key={each.id}
          buttonList={each}
          isActive={activeFilterButton === each.value}
          setActiveFilterButton={setActiveFilterButton}
        />
      ))}
    </div>
  );
};
export default Filters;
