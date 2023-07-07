import { app, BrowserWindow, ipcMain } from "electron";
import * as path from "path";

let window: BrowserWindow | undefined;
const port = process.env.DEV ? process.env.PORT : undefined;
const devTool = false;

const createMainWindow = async () => {
  window = new BrowserWindow({
    width: 960,
    height: 540,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  window.once("ready-to-show", () => {
    window?.show();
  });

  if (port) {
    window.loadURL(`http://localhost:${port}`);

    if (devTool) window.webContents.openDevTools();
  } else {
    window.loadFile(path.join(__dirname, "../../ret/build/index.html"));
  }

  ipcMain.on("helloWorld", (event, text: string) => {
    console.log(text);
  });
};

app.on("ready", () => {
  createMainWindow();
});

app.on("window-all-closed", () => {
  app.quit();
});

app.on("activate", (): void => {
  if (window === null) {
    createMainWindow();
  }
});
