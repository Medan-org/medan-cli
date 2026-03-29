import { Command } from "commander";

export default function curlCommand() {
  const cmd = new Command("curl");

  cmd
    .description("Fetch a URL")
    .argument("<url>", "URL to fetch")
    .action((url) => {
      console.log(`Curl is not implemented yet. Would fetch: ${url}`);
    });

  return cmd;
}
