import React from "react";
import Select from "react-select";
import {customStyles} from './reactselectstyle'

const options = [
  { value: "c", label: "C" },
  { value: "cpp", label: "c++" },
  { value: "py", label: "python" },
];
export default function Languageselect({onlangchange}) {
  return (
    <div>
      {" "}
      <Select
        placeholder={`Filter By Category`}
        options={options}
        styles={customStyles}
        defaultValue={options[0]}
        onChange={(selectedOption) => onlangchange(selectedOption)}
      />
    </div>
  );
}
