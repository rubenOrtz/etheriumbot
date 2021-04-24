const Sentry = require("@sentry/node");

const bot = require("./structures/Client.js");
const client = new bot(process.env.DISCORD_TOKEN);
client.login();

Sentry.init({
    dsn: "URLSENTRY",
    integrations: [
        // enable HTTP calls tracing
        new Sentry.Integrations.Http({ tracing: true }),
    ],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
});