export async function GET(
  request: Request,
  { params }: { params: { locale: string } }
) {
  const locale = params.locale;
  const messages = await import(`@/utils/data/${locale}.json`);
  return new Response(JSON.stringify(messages), { status: 200 });
}
