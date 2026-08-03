/**
 * Copy this file to intasend-config.js and fill in your PUBLISHABLE key only.
 *
 *   copy intasend-config.example.js intasend-config.js
 *
 * Publishable key (ISPubKey_...) — safe in the browser. Required for checkout.
 * Secret / API token (ISSecretKey_...) — NEVER put in this static site.
 *   Keep it only on a backend/serverless function if you need refunds, wallets, etc.
 */
window.INTASEND_CONFIG = {
  publicKey: 'ISPubKey_REPLACE_ME',
  live: false // true when using live keys from the IntaSend dashboard
};
