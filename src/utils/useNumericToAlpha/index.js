import { useEffect, useState } from "react";
import numeral from "numeral";

const useNumericToAlpha = (number) => {
  useEffect(() => {
    getResult();
  }, [number]);
  const [numberToAlpha, setNumberToAlpha] = useState("");
  const getResult = () => {
    if (number !== undefined) {
      if (number.length === 6) {
        setNumberToAlpha(numeral(number).format("0 a").toUpperCase());
        return numberToAlpha.replace(".0", "");
      }
      setNumberToAlpha(numeral(number).format("0.0 a").toUpperCase());
    }
  };

  return numberToAlpha.replace(".0", "");
};
export default useNumericToAlpha;
