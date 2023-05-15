import React, { useState } from "react";
import Editor from "@monaco-editor/react";

export default function Codeeditor({value,language,oncodechange}) {
 

  console.log(language)
  const handleEditorChange = (e) => {
    oncodechange(e);

  };
  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
      <Editor
        height="85vh"
        width={`70%`}
        theme="vs-dark"
        defaultLanguage={language}
        value={value}
        // defaultValue={`// some comment`}
        onChange={handleEditorChange}
      />
    </div>
  );
}
