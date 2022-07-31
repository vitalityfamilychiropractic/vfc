import mailchannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

const MailChannels = async ({ request, next, env, waitUntil }) => mailchannelsPlugin({
  personalizations: [
    {
      to: [{ name: env.CONTACT_FORM_TO_NAME, email: env.CONTACT_FORM_TO_EMAIL }],
    },
  ],
  from: { name: env.CONTACT_FORM_FROM_NAME, email: env.CONTACT_FORM_FROM_EMAIL },
  respondWith: () =>
    new Response(null, {
      status: 302,
      headers: { Location: "/thank-you" },
    }),
});

export const onRequest = [MailChannels];
