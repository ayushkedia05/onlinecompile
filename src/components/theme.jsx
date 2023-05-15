import React from "react";
import Select from "react-select";
import monacoThemes from "monaco-themes/themes/themelist";
import {customStyles} from './reactselectstyle'

const Themeselect = ({ handleThemeChange, theme }) => {
  return (
    <Select
      placeholder={`Select Theme`}
      // options={languageOptions}
      styles={customStyles}
      options={Object.entries(monacoThemes).map(([themeId, themeName]) => ({
        label: themeName,
        value: themeId,
        key: themeId,
      }))}
      value={theme}
      onChange={handleThemeChange}
    />
  );
};

export default Themeselect;