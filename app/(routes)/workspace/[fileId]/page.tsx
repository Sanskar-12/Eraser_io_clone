"use client";

import React, { useEffect, useState } from "react";
import WorkspaceHeader from "../_components/WorkspaceHeader";
import Editor from "../_components/Editor";
import { useParams } from "next/navigation";
import { useConvex } from "convex/react";
import { api } from "@/convex/_generated/api";
import { File } from "../../dashboard/_components/FilesList";
import Canvas from "../_components/Canvas";

const Workspace = () => {
  const [triggerSave, setTriggerSave] = useState(false);
  const params = useParams();
  const convex = useConvex();
  const [fileData, setFileData] = useState<File | any>();

  useEffect(() => {
    params.fileId && getSavedDocument();
  }, []);

  const getSavedDocument = async () => {
    const result = await convex.query(api.files.getDocument, {
      _id: params.fileId as any,
    });
    setFileData(result);
  };

  return (
    <div>
      <WorkspaceHeader onSave={() => setTriggerSave(!triggerSave)} />

      {/* Workspace Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Document */}
        <div className=" h-screen">
          <Editor
            triggerSave={triggerSave}
            fileId={params?.fileId}
            fileData={fileData}
          />
        </div>
        {/* Whiteboard Canvas */}
        <div className=" h-screen border-l">
          <Canvas
            triggerSave={triggerSave}
            fileId={params?.fileId}
            fileData={fileData}
          />
        </div>
      </div>
    </div>
  );
};

export default Workspace;
