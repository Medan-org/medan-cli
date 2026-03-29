import { Command } from "commander";
import nanoCommand from "./Medan's commands/nano/index.js";
import curlCommand from "./Medan's commands/curl/index.js";
import medanCommand from "./Medan's commands/medan/index.js";

const program = new Command();

program
  .name("medan")
  .description("The Medan command-line interface")
  .version("0.1.0");

// Register built-in commands
program.addCommand(nanoCommand());
program.addCommand(curlCommand());
program.addCommand(medanCommand());

program.parse();
