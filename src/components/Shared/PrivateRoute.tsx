import React from "react";
import { FiUserCheck } from "react-icons/fi";
import useStore from "../../zustand/auth";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { currentUser } = useStore();

  return <>{children}</>;
};

export default PrivateRoute;
