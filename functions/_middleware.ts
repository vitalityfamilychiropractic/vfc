import mailchannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export default {
  async fetch(request, env) {
    mailchannelsPlugin({
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

    return env.ASSETS.fetch(request);
  }
}
