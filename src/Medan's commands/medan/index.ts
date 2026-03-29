import { Command } from "commander";

export default function medanCommand() {
  const cmd = new Command("medan");

  cmd
    .description("Internal Medan utilities")
    .command("version")
    .description("Show Medan internal version")
    .action(() => {
      console.log("Medan internal version 0.1.0");
    });

  return cmd;
}
