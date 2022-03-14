import React from "react";
import { LinkRoute } from "components/LinkRoute";
import { ROOT } from "./constants";

export const NotFound = () => {
  return (
    <>
      {/* Page Not Found! */}
      <LinkRoute to={ROOT}>Home</LinkRoute>
      <h1>404: page not found!</h1>
    </>
  );
};
