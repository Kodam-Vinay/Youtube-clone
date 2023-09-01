import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../Slices/HamburgerSlice";
import { useSearchParams } from "react-router-dom";

const Video = () => {
  const [searchId] = useSearchParams();
  console.log(searchId.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  });
  useEffect(() => {}, []);
  return <div className="w-full"></div>;
};

export default Video;
