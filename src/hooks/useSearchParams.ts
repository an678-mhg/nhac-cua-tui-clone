import React from "react";
import { useLocation } from "react-router-dom";

const useSearchParams = () => {
  const location = useLocation();
  const searParams = new URLSearchParams(location.search);
  return searParams;
};

export default useSearchParams;
