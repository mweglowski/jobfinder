"use client";
import React from "react";
import Image from "next/image";

const FormDetail = ({ text, onRemove }) => {
  const removeHandler = () => {
    onRemove(text);
  };

  return (
    <div className="bg-emerald-700 p-1 pl-3 pr-2 rounded-md text-slate-200 flex">
      <p>{text}</p>
      <Image
        src={"/assets/icons/close-md.svg"}
        width={20}
        height={20}
        alt="Remove detail"
        className="pl-1 cursor-pointer"
        onClick={removeHandler}
      />
    </div>
  );
};

export default FormDetail;
