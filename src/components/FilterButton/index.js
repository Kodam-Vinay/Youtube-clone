const FilterButton = ({ buttonList, setActiveFilterButton, isActive }) => {
  const { value, name } = buttonList;
  const onClickFilter = () => {
    setActiveFilterButton(value);
  };
  return (
    <button
      type="button"
      className={`text-sm mxs:text-base min-w-fit px-4 h-10 sm:py-1  rounded-md ${
        isActive ? "bg-gray-300" : "bg-gray-100"
      }`}
      onClick={onClickFilter}
    >
      {name}
    </button>
  );
};
export default FilterButton;
