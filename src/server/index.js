import { appPort } from 'config';
import createServer from './createServer';

// Set the default timezone at UTC
process.env.TZ = 'UTC';

// Catch all uncaught exception, log it and then die properly
process.on('uncaughtException', err => {
  console.log(err);
  process.exit(1);
});

// Start the server
createServer().listen(appPort, () => {
  console.log('server-started : ' + appPort);
});
