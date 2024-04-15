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
  const localeMessages = (await import(`@/utils/translation/${locale}.ts`))
    .default;
  localeMessages[key] = value;
  fs.writeFile("books.txt", localeMessages);

  return new Response("ok", { status: 200 });
}
