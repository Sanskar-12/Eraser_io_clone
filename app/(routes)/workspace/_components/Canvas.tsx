import React from "react";
import { Excalidraw, MainMenu, WelcomeScreen } from "@excalidraw/excalidraw";

function Canvas() {
  return (
    <div style={{ height: "100vh" }}>
      <Excalidraw
        onChange={(excalidrawElements, appState, files) =>
          console.log(excalidrawElements)
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
    </div>
  );
}

export default Canvas;
