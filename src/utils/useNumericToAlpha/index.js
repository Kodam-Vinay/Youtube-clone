import { useEffect, useState } from "react";
import numeral from "numeral";

const useNumericToAlpha = (number) => {
  useEffect(() => {
    getResult();
  }, [number]);
  const [numberToAlpha, setNumberToAlpha] = useState("");
  const getResult = () => {
    if (number.length === 6) {
      setNumberToAlpha(numeral(number).format("0 a").toUpperCase());
      return numberToAlpha;
    }
    setNumberToAlpha(numeral(number).format("0.0 a").toUpperCase());
  };

  return numberToAlpha;
};
export default useNumericToAlpha;
