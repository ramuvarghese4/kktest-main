const { loadConfig } = require('./config');
const { createClient } = require('./api/client');
const productService = require('./services/productService');
const logger = require('./utils/logger');

const config = loadConfig();
const client = createClient(config);

async function start() {
  logger.info(`Starting ${config.appName}`);

  try {
    const products = await productService.getProducts(client);
    logger.info('Products fetched', { count: products.length });
  } catch (err) {
    logger.error('Error fetching products', { error: err.message });
  }
}

start();