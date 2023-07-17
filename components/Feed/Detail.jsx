'use client'
import React from "react";
import Image from "next/image";


const Detail = ({ text, removeDetail }) => {
  const handleRemoveDetail = () => {
    removeDetail(text);
  };

  return (
    <div className="detail">
      <div className="detail_text">{text}</div>
      <Image
        src={"/assets/icons/close-md.svg"}
        width={20}
        height={20}
        alt="Remove detail"
        className="remove_detail"
        onClick={handleRemoveDetail}
      />
    </div>
  );
};

export default Detail;
