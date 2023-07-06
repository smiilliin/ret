import { contextBridge, ipcRenderer } from "electron";

const api: Api = {
  helloWorld(text) {
    ipcRenderer.send("helloWorld", text);
  },
};

contextBridge.exposeInMainWorld("api", api);
