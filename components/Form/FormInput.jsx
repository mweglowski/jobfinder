"use client";
import { forwardRef } from "react";

const FormInput = forwardRef(
  (
    { placeholder = "Start Typing...", type = "text", onKeyDown = () => {} },
    ref
  ) => {
    return onKeyDown ? (
      <input
        className="bg-slate-100 text-slate-400 p-2 rounded-md duration-500 focus:inset_shadow outline-none focus:bg-white border"
        placeholder={placeholder}
        ref={ref}
        onKeyDown={onKeyDown}
        type={type}
      />
    ) : (
      <input
        className="bg-slate-100 text-slate-400 p-2 rounded-md duration-500 focus:inset_shadow outline-none focus:bg-white border"
        placeholder={placeholder}
        ref={ref}
        type={type}
      />
    );
  }
);

export default FormInput;
