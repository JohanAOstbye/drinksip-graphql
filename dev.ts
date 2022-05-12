import httpServer from './api/index';
import consola from 'consola';
import dotenv from 'dotenv';

dotenv.config();

httpServer.listen(3000, () => consola.info('Server started'));
