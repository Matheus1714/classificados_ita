import React from "react";
import { Link } from "react-router-dom";
import { LinkRoute } from "components/LinkRoute";
import { ROOT } from "navigation/constants";

export const NavLinks = () => {
  return (
    <>
      {/* Default Link tag. Make sure you always use Link from 'react-router-dom' and not from '@materialui...' */}
      <Link to={ROOT}>Root</Link>
      {/* Common component created for all Link tags to be used. Thus, avoiding reputation of any styling and universal reuse */}
      <LinkRoute to={"/undefinedRoute"}>Undefined Page</LinkRoute>
    </>
  );
};
