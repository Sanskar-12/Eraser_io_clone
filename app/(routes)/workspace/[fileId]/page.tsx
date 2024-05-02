import React from "react";
import WorkspaceHeader from "../_components/WorkspaceHeader";
import Editor from "../_components/Editor";

const Workspace = () => {
  return (
    <div>
      <WorkspaceHeader />

      {/* Workspace Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Document */}
        <div className=" h-screen">
          <Editor />
        </div>
        {/* Whiteboard Canvas */}
        <div className=" h-screen">Canvas</div>
      </div>
    </div>
  );
};

export default Workspace;
