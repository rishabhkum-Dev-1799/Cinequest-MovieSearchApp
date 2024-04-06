import React from "react";
import clsx from "clsx";
export const H1heading = ({ children, className }) => {
  return (
    <h1
      className={clsx("text-3xl lg:text-4xl font-sans text-primary", className)}
    >
      {children}
    </h1>
  );
};
export const H2heading = ({ children, className }) => {
  return (
    <h2
      className={clsx("text-2xl lg:text-3xl font-sans text-primary", className)}
    >
      {children}
    </h2>
  );
};
export const H3heading = ({ children, className }) => {
  return (
    <h3
      className={clsx("text-xl lg:text-2xl font-sans text-primary", className)}
    >
      {children}
    </h3>
  );
};
export const H4heading = ({ children, className }) => {
  return (
    <h4
      className={clsx("text-lg lg:text-xl font-sans text-primary", className)}
    >
      {children}
    </h4>
  );
};
export const H5heading = ({ children, className }) => {
  return (
    <h5
      className={clsx("text-sm lg:text-lg font-sans text-primary", className)}
    >
      {children}
    </h5>
  );
};
export const H6heading = ({ children, className }) => {
  return (
    <h6
      className={clsx("text-xs lg:text-lg font-sans text-primary", className)}
    >
      {children}
    </h6>
  );
};
