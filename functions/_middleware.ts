import mailChannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest: PagesFunction = mailChannelsPlugin({
  personalizations: [
    {
      to: [{
        name: CONTACT_FORM_TO_NAME,
        email: env.CONTACT_FORM_TO_EMAIL,
      }],
    },
  ],
  from: {
    name: env.CONTACT_FORM_FROM_NAME,
    email: env.CONTACT_FORM_FROM_EMAIL,
  },
  respondWith: () => {
    return new Response(
      `Thank you for submitting your enquiry. A member of the team will be in touch shortly.`
    );
  },
});
