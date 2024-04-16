export async function GET(
  request: Request,
  { params }: { params: { locale: string } }
) {
  const locale = params.locale;
  const messages = (await import(`@/data/${locale}.json`)).default;

  return new Response(JSON.stringify(messages), { status: 200 });
}
