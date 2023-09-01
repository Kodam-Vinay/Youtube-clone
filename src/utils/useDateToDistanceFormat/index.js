import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";

const DateToDistanceFormat = (publishedAt) => {
  const [formatTime, setFormatTime] = useState("");
  useEffect(() => {
    if (
      formatDistanceToNow(new Date(publishedAt), { addSuffix: true }).includes(
        "about"
      )
    ) {
      setFormatTime(
        formatDistanceToNow(new Date(publishedAt), { addSuffix: true }).replace(
          "about",
          ""
        )
      );
    } else {
      setFormatTime(
        formatDistanceToNow(new Date(publishedAt), { addSuffix: true })
      );
    }
  }, [publishedAt]);
  return formatTime;
};
export default DateToDistanceFormat;
