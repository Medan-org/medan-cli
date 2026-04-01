import path from "path";
import nanoCommand from "./Medan's commands/nano/index.js";
import curlCommand from "./Medan's commands/curl/index.js";
import medanCommand from "./Medan's commands/medan/index.js";

const invokedAs = path.basename(process.argv[1]);

switch (invokedAs) {
  case "nano":
    nanoCommand();
    break;

  case "curl":
    curlCommand();
    break;

  case "medan":
    medanCommand();
    break;

  default:
    console.log(`Unknown command: ${invokedAs}`);
}
