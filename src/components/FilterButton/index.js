import { useSelector } from "react-redux";

const FilterButton = ({ buttonList, setActiveFilterButton, isActive }) => {
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);
  const { value, name } = buttonList;
  const onClickFilter = () => {
    setActiveFilterButton(value);
  };
  return (
    <button
      type="button"
      className={`text-sm mxs:text-base min-w-fit px-4 h-10 sm:py-1 rounded-md shadow-sm ${
        isDarkMode
          ? isActive
            ? "bg-slate-950 border border-slate-800 text-white"
            : "bg-gray-900 text-white"
          : isActive
          ? "bg-gray-300 text-black"
          : "bg-gray-100 text-black"
      }`}
      onClick={onClickFilter}
    >
      {name}
    </button>
  );
};
export default FilterButton;
