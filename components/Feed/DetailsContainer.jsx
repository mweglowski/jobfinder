import React from "react";
import Detail from "@components/Feed/Detail";

const DetailsContainer = ({ data, removeDetail }) => {
  return (
    <div className="details_container">
      {data.map((detail) => (
        <Detail key={detail} text={detail} removeDetail={removeDetail} />
      ))}
    </div>
  );
};

export default DetailsContainer;
