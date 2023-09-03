import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../Slices/HamburgerSlice";
import { useSearchParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { YOUTUBE_VIDEO_DETAILS_API } from "../../config/constants";

const constApiStatus = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const Video = () => {
  const [apiStaus, setApiStatus] = useState({
    status: constApiStatus.initial,
    errorMsg: "",
    cityName: "",
    data: {},
  });
  const [searchId] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  });
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getData = async () => {
    setApiStatus((prev) => ({
      ...prev,
      status: constApiStatus.inProgress,
    }));
    try {
      const videoId = searchId.get("v");
      const apiUrl = YOUTUBE_VIDEO_DETAILS_API.replace(
        "id=Ks-_Mh1QhMc",
        `id=${videoId}`
      );
      const response = await fetch(apiUrl);
      if (response.status === 200) {
        const data = await response.json();

        setApiStatus((prev) => ({
          ...prev,
          status: constApiStatus.success,
          data: data.items[0],
        }));
      } else {
        setApiStatus((prev) => ({
          ...prev,
          status: constApiStatus.failure,
          errorMsg: "Your Making Bad Request",
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const SuccessView = () => {
    const { id, snippet, statistics } = apiStaus.data;
    return (
      <div className="w-full h-full">
        <div className="w-full h-1/3 mxs:h-2/5 sm:h-1/2 md:h-2/3 lg:w-2/3 lg:h-3/4">
          <ReactPlayer
            url={`crossproxy.io?/https://www.youtube.com/embed/${id}`}
            width="100%"
            height="100%"
            controls
            className="rounded-md"
            playing
          />
        </div>
      </div>
    );
  };

  const RenderResults = () => {
    switch (apiStaus.status) {
      case constApiStatus.inProgress:
        return <h1>Loading.....</h1>;
      case constApiStatus.success:
        return <SuccessView />;
      default:
        return null;
    }
  };

  return <div className="w-full h-full">{RenderResults()}</div>;
};

export default Video;
