const { spawn } = require("cross-spawn");
const tcpPortUsed = require("tcp-port-used");

const isPortOpen = (port) => {
  return tcpPortUsed.check(port, "127.0.0.1");
};

(async () => {
  let port = 2999;
  while (await isPortOpen(++port)) {}

  spawn("npm run dev:script", {
    env: { PORT: port, DEV: "true", BROWSER: "NONE" },
    stdio: "inherit",
  });
})();
