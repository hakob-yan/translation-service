const fs = require("fs");
export const dynamic = "force-dynamic";
export async function GET(
  request: Request,
  { params }: { params: { locale: string } }
) {
  const locale = params.locale;
  const messages = fs.readFileSync(`src/data/${locale}.json`, {
    encoding: "utf8",
  });
  return new Response(messages, { status: 200 });
}
export const revalidate = 0;
