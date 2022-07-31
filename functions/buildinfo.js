export async function onRequest(context) {
  return new Response(JSON.stringify(context));
//  return new Response(context.env.CF_PAGES_BRANCH + ' ' + context.env.CF_PAGES_COMMIT_SHA);
}
