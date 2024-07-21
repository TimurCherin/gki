import Fastify from 'fastify';
import closeWithGrace from 'close-with-grace';

import appService from './app.js';
import config from './config.js';

const isProduction = process.env.NODE_ENV === 'production';

// Instantiate Fastify with some config
const app = Fastify({ logger: !isProduction });

// Register your application as a normal plugin.

app.register(appService);

// delay is the number of milliseconds for the graceful close to finish
const closeListeners = closeWithGrace({ delay: process.env.FASTIFY_CLOSE_GRACE_DELAY || 500 }, async ({ signal, err, manual }) => {
  if (err) {
    app.log.error(err);
  }
  await app.close();
});

app.addHook('onClose', async (instance, done) => {
  closeListeners.uninstall();
  done();
});
process.env.PORT = process.env.PORT || config.port || 3000;
// Start listening.
app.listen({ host: '0.0.0.0', port: process.env.PORT }, (err) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});
