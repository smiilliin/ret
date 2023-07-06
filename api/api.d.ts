declare global {
  interface Api {
    helloWorld: (text: string) => void;
  }
  interface Window {
    api: Api;
  }
}

export default global;
