import React from "react";
import FormDetail from "./FormDetail";

const FormDetailContainer = ({ details, removeHandler }) => {
  return (
    <div className="flex gap-2 -mt-3 flex-wrap">
      {details?.map((detail) => (
        <FormDetail key={detail} text={detail} onRemove={removeHandler} />
      ))}
    </div>
  );
};

export default FormDetailContainer;
