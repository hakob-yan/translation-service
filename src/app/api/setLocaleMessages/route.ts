const fs = require("fs");
async function streamToString(stream: any): Promise<any> {
  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString("utf8");
}
export async function POST(request: Request) {
  const data = await streamToString(request.body);
  const { locale, key, value } = JSON.parse(data);
  const localeMessages = JSON.parse(
    fs.readFileSync(`src/data/${locale}.json`, {
      encoding: "utf8",
    })
  );

  localeMessages[key] = value;
  fs.writeFile(
    `src/data/${locale}.json`,
    JSON.stringify(localeMessages),
    (err: any) => {}
  );

  return new Response(data, { status: 200 });
}
