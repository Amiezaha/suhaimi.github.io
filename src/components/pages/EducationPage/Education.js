import React from "react";
import "./Education.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CardSection from "../../CardSection";
import { data1, data2, data3 } from "./EducationData";

function Education() {
  return (
    <>
      <CardSection {...data1} /> <CardSection {...data2} />
      <CardSection {...data3} />
    </>
  );
}

export default Education;
