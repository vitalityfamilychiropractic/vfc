import mailchannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest = mailchannelsPlugin({
  personalizations: [
    {
      to: [{ name: CONTACT_FORM_TO_NAME, email: CONTACT_FORM_TO_EMAIL }],
    },
  ],
  from: { name: CONTACT_FORM_FROM_NAME, email: CONTACT_FORM_FROM_EMAIL },
  respondWith: () =>
    new Response(null, {
      status: 302,
      headers: { Location: "/thank-you" },
    }),
});
