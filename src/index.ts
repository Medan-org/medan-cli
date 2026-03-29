import { Command } from "commander";
import { readdirSync } from "fs";
import { join } from "path";

const program = new Command();

program
  .name("medan")
  .description("The Medan command-line interface")
  .version("0.1.0");

// Load built-in commands
const commandsDir = join(__dirname, "Medan's commands");

const commandFolders = readdirSync(commandsDir, { withFileTypes: true })
  .filter(dir => dir.isDirectory())
  .map(dir => dir.name);

for (const folder of commandFolders) {
  const commandPath = join(commandsDir, folder, "index.js");
  const commandModule = require(commandPath);

  if (typeof commandModule.default === "function") {
    program.addCommand(commandModule.default());
  }
}

program.parse();
