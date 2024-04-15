export async function GET(
  request: Request,
  { params }: { params: { locale: string } }
) {
  const locale = params.locale;
  const messages = (await import(`@/utils/translation/${locale}.ts`)).default;
  return new Response(JSON.stringify(messages), { status: 200 });
}
