import { Command } from "commander";

export default function nanoCommand() {
  const cmd = new Command("nano");

  cmd
    .argument("<file>", "file to open")
    .description("Open a file in the nano editor")
    .action((file) => {
      console.log(`Nano is not implemented yet. Would open: ${file}`);
    });

  return cmd;
}
