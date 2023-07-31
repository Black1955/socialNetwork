import React from "react";
import "./skeleton.scss";
import { IClasses } from "./skeleton_type.ts";
export const Skeleton: React.FC<IClasses> = ({ classes }) => {
  const combinedClasses = ["skeleton", ...classes, "animate"].join(" ");

  return <div className={combinedClasses}></div>;
};
