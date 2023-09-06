import { useEffect, useState } from "react";
import { formatDistanceToNowStrict } from "date-fns/esm";

const DateToDistanceFormat = (publishedAt) => {
  const [formatTime, setFormatTime] = useState("");
  useEffect(() => {
    setFormatTime(
      formatDistanceToNowStrict(new Date(publishedAt), {
        addSuffix: true,
      })
    );
  }, [publishedAt]);
  return formatTime;
};
export default DateToDistanceFormat;
