import mailChannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest = (context) => mailChannelsPlugin({
  personalizations: [
    {
      to: [{
        name: context.env.CONTACT_FORM_TO_NAME,
        email: context.env.CONTACT_FORM_TO_EMAIL,
      }],
    },
  ],
  from: {
    name: context.env.CONTACT_FORM_FROM_NAME,
    email: context.env.CONTACT_FORM_FROM_EMAIL,
  },
  respondWith: () => {
    return new Response(
      `Thank you for submitting your enquiry. A member of the team will be in touch shortly.`
    );
  },
});
