import { Command } from "commander";

const program = new Command();

program
  .name("medan")
  .description("The Medan command-line interface")
  .version("0.1.0");

program
  .command("hello")
  .description("Say hello from Medan CLI")
  .action(() => {
    console.log("Hello from Medan CLI!");
  });

program.parse();
