import { Command } from "commander";

export default function curlCommand() {
  const cmd = new Command("curl");

  cmd
    .argument("<url>", "URL to fetch")
    .description("Fetch a URL")
    .action((url) => {
      console.log(`Curl is not implemented yet. Would fetch: ${url}`);
    });

  return cmd;
}
