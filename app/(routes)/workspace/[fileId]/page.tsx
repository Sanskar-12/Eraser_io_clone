import React from "react";
import WorkspaceHeader from "../_components/WorkspaceHeader";

const Workspace = () => {
  return (
    <div>
      <WorkspaceHeader />

      {/* Workspace Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Document */}
        <div className="bg-blue-400 h-screen">Document</div>
        {/* Whiteboard Canvas */}
        <div className="bg-red-400 h-screen">Canvas</div>
      </div>
    </div>
  );
};

export default Workspace;
