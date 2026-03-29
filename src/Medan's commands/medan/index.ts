import { Command } from "commander";

export default function medanCommand() {
  const cmd = new Command("medan");

  cmd
    .description("Medan CLI internal command")
    .action(() => {
      console.log("Medan CLI version 0.1.0");
    });

  return cmd;
}
