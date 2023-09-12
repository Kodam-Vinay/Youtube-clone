import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const NavigationLink = ({ linksList, isActive1, isActive2 }) => {
  const { logo, value, url } = linksList;
  const navigate = useNavigate();

  const onClickLink = () => {
    navigate(url);
  };
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);
  return (
    <div
      className={`add-sidebar-animation flex items-center space-x-2 h-7  cursor-pointer rounded-md px-2  ${
        isDarkMode
          ? isActive1 && isActive2
            ? "bg-slate-950 border border-slate-800 text-white"
            : "text-white"
          : isActive1 && isActive2
          ? "bg-gray-300 text-black"
          : "text-black"
      }`}
      onClick={onClickLink}
    >
      <div>{logo}</div>
      <div>{value ? value : ""}</div>
    </div>
  );
};
export default NavigationLink;
