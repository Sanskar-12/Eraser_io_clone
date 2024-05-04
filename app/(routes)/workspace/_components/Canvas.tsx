import React, { useEffect, useState } from "react";
import { Excalidraw, MainMenu, WelcomeScreen } from "@excalidraw/excalidraw";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

function Canvas({ triggerSave, fileId, fileData }: any) {
  const [whiteboardData, setWhiteBoardData] = useState<any>();
  const updateWhiteboard = useMutation(api.files.updateWhiteboard);

  useEffect(() => {
    triggerSave && onSaveWhiteboard();
  }, [triggerSave]);

  const onSaveWhiteboard = () => {
    updateWhiteboard({
      _id: fileId,
      whiteboard: JSON.stringify(whiteboardData),
    }).then((resp) => console.log(resp));
  };

  return (
    <div style={{ height: "100vh" }}>
      {fileData && (
        <Excalidraw
          initialData={{
            elements: fileData?.whiteboard && JSON.parse(fileData.whiteboard),
          }}
          onChange={(excalidrawElements, appState, files) =>
            setWhiteBoardData(excalidrawElements)
          }
          UIOptions={{
            canvasActions: {
              saveToActiveFile: false,
              loadScene: false,
              export: false,
            },
          }}
        >
          <MainMenu>
            <MainMenu.DefaultItems.ClearCanvas />
            <MainMenu.DefaultItems.SaveAsImage />
            <MainMenu.DefaultItems.ToggleTheme />
            <MainMenu.DefaultItems.ChangeCanvasBackground />
          </MainMenu>
          <WelcomeScreen>
            <WelcomeScreen.Hints.MenuHint />
            <WelcomeScreen.Hints.ToolbarHint />
            <WelcomeScreen.Center>
              <WelcomeScreen.Center.Heading>
                Diagrams Make Things Simple
              </WelcomeScreen.Center.Heading>
            </WelcomeScreen.Center>
          </WelcomeScreen>
        </Excalidraw>
      )}
    </div>
  );
}

export default Canvas;
