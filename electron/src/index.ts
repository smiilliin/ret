import { app, BrowserWindow, ipcMain } from "electron";
import * as path from "path";

let mainWindow: BrowserWindow;
const port = process.env.DEV ? process.env.PORT : undefined;
const devTool = false;

const createMainWindow = async () => {
  mainWindow = new BrowserWindow({
    width: 960,
    height: 540,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  mainWindow.once("ready-to-show", () => {
    mainWindow?.show();
  });

  if (port) {
    mainWindow.loadURL(`http://localhost:${port}`);

    if (devTool) mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(path.join(__dirname, "../../ret/build/index.html"));
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
  if (mainWindow === null) {
    createMainWindow();
  }
});
