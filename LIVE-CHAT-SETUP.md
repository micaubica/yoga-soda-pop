# Live chat setup

The shared layout loads the owner's Tawk.to widget on every page after the page
finishes loading. The public widget IDs are configured in `app/live-chat.tsx`,
so no environment setup is required to preview this widget. To disable chat,
set `NEXT_PUBLIC_TAWK_ENABLED=false` before building. The existing contact page
and email link remain available.

1. Create or sign in to your Tawk.to account and select your website property.
2. Open Administration → Chat Widget and copy the Property ID and Widget ID.
   You can also get both from the Direct Chat Link:
   `https://tawk.to/chat/PROPERTY_ID/WIDGET_ID`.
3. To replace the configured widget, set `NEXT_PUBLIC_TAWK_PROPERTY_ID` and `NEXT_PUBLIC_TAWK_WIDGET_ID` in
   `.env.local` for local testing and in the production build environment when
   ready to publish. Restart the dev server after changing these values.
   Static exports need to be rebuilt when the IDs change.
4. In the widget appearance settings, choose a bottom-right position and
   brand color `#b82060`. Suggested title: “Chat with Yoga Soda Pop”.
5. In Chat Widget → Widget Content → Edit Content → Offline, keep the Name,
   Email, and Message form. Suggested greeting: “We’re away right now. Leave
   your email and message and we’ll get back to you.” Ensure the widget stays
   visible while offline.
6. Use your Tawk.to dashboard to answer live chats. Offline submissions arrive
   in its Inbox; convert a message to a ticket to reply to the visitor.

Before publishing, use a private browser window to verify that the widget opens
on desktop and mobile, a live conversation reaches your dashboard, and an
offline submission reaches your Inbox. Only perform message-delivery tests with
the account owner's authorization. Message delivery and offline account
settings still need to be verified in the owner's dashboard.

This repository covers the main website. The separate WooCommerce shop needs
the widget installed in WordPress as well; this integration does not change it.

Official references:
- https://help.tawk.to/article/adding-a-widget-to-your-website
- https://help.tawk.to/article/where-can-i-find-the-property-and-widget-id
- https://help.tawk.to/article/using-the-offline-form
