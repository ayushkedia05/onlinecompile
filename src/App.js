import "./App.css";
import axios from "axios";
import Codeeditor from "./components/editor";
// import Themeselect from "./components/theme";
import Button from "@mui/material/Button";

import Languageselect from "./components/languageselect";
import React, { useState } from "react";
function App() {
  const [code, setcode] = useState();
  const [lang, setlang] = useState({ value: "c", label: "c" });
  const [out, setout] = useState("");

  const submithandler = async () => {
    console.log(code);

    const template = {
      language: lang.value,
      code: code,
      custominput: "e",
    };

    const getback = axios.post("http://localhost:3001/", template);
    getback.then(
      (res) => setout(res.data.output),
      (error) => {
        console.log(error);
      }
    );

    console.log(template);
  };

  const onlangchange = (val) => {
    setlang(val);
  };

  const oncodechange = (e) => {
    setcode(e);
  };

  return (
    <div>
      <div className="flex-auto align-ce content-center ">
        <Languageselect onlangchange={onlangchange} />
        <Codeeditor
          code={code}
          language={lang.label}
          oncodechange={oncodechange}
        ></Codeeditor>
        <div>{out}</div>
      </div>
      <Button onClick={submithandler}>Submit</Button>
    </div>
  );
}

export default App;
