"use client";

import React, { useState } from "react";
import WorkspaceHeader from "../_components/WorkspaceHeader";
import Editor from "../_components/Editor";
import { useParams } from "next/navigation";

const Workspace = () => {
  const [triggerSave, setTriggerSave] = useState(false);
  const params = useParams();

  return (
    <div>
      <WorkspaceHeader onSave={() => setTriggerSave(!triggerSave)} />

      {/* Workspace Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Document */}
        <div className=" h-screen">
          <Editor triggerSave={triggerSave} fileId={params?.fileId} />
        </div>
        {/* Whiteboard Canvas */}
        <div className=" h-screen">Canvas</div>
      </div>
    </div>
  );
};

export default Workspace;
