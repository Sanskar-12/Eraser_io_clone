"use client";

import React, { useEffect } from "react";
import EditorJS from "@editorjs/editorjs";

const Editor = () => {
  useEffect(() => {
    initEditor();
  }, []);

  const initEditor = () => {
    const editor = new EditorJS({
      /**
       * Id of Element that should contain Editor instance
       */
      holder: "editorjs",
    });
  };

  return <div id="editorjs"></div>;
};

export default Editor;
