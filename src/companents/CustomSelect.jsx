import { useField } from "formik";
import React from "react";

function CustomSelect({ labelProps, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <label>{labelProps}</label>
      <select
        {...field}
        {...props}
        className={meta.error ? "input-error" : ""}
      />
      {meta.error && <div className="errorMessage">{meta.error}</div>}
    </>
  );
}

export default CustomSelect;
