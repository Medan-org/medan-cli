import { Command } from "commander";

export default function nanoCommand() {
  const cmd = new Command("nano");

  cmd
    .description("Open the nano editor")
    .action(() => {
      console.log("Nano is not implemented yet.");
    });

  return cmd;
}
