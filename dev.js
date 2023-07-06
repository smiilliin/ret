const { spawn } = require("cross-spawn");
const net = require("net");

const isPortOpen = (port) => {
  return new Promise((resolve) => {
    const socket = new net.Socket();

    socket.on("timeout", () => {
      socket.destroy();
      resolve(false);
    });

    socket.on("error", (error) => {
      if (error.code !== "ECONNREFUSED") resolve(false);
      else resolve(true);
    });
    socket.on("connect", () => {
      socket.destroy();
      resolve(false);
    });
    socket.connect(port, "127.0.0.1");
    socket.setTimeout(500);
  });
};

(async () => {
  let port = 2999;
  while (!(await isPortOpen(++port))) {}

  spawn("npm run dev:script", { env: { PORT: port, DEV: "true", BROWSER: "NONE" }, stdio: "inherit" });
})();
