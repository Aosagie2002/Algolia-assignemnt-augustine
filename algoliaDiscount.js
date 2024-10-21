// algoliaDiscount.js
require('dotenv').config();
const algoliasearch = require('algoliasearch');
const yargs = require('yargs');
const fs = require('fs');

// Function to apply discount to products in the specified category
const applyCategoryDiscount = (productsList, targetCategory, discountPercentage) => {
  console.log(`Applying a discount of ${discountPercentage}% to category: ${targetCategory}`);

  let discountedCount = 0;

  productsList.forEach((product) => {
    if (product.categories.includes(targetCategory)) {
      product.price = Math.floor(product.price * (1 - discountPercentage / 100));
      discountedCount++;
    }
  });

  console.log(`Discount applied to ${discountedCount} products.`);
  return discountedCount; // Return the count for testing purposes
};

// Function to push updated product data to Algolia
const uploadToAlgolia = async (productsList, algoliaIndex) => {
  console.log(`Uploading ${productsList.length} items to Algolia`);

  try {
    await algoliaIndex.saveObjects(productsList, { autoGenerateObjectIDIfNotExist: true });
    console.log('Upload to Algolia completed successfully');
    return true; // Indicate success for testing purposes
  } catch (error) {
    console.error('Error during Algolia upload:', error);
    throw new Error(`Upload failed: ${error.message}`); // Throw error for testing purposes
  }
};

// Function to configure the search index settings
const configureAlgoliaSettings = async (algoliaIndex) => {
  console.log('Configuring Algolia index settings...');

  try {
    await algoliaIndex.setSettings({
      searchableAttributes: ['name', 'description'],
      customRanking: ['desc(rating)', 'desc(popularity)'],
      attributesForFaceting: ['brand', 'categories'],
    });
    console.log('Index settings updated');
  } catch (error) {
    console.error('Failed to update index settings:', error);
  }
};

// Load product data from file
const loadProductData = (filePath) => {
  try {
    const data = require(filePath);
    return data;
  } catch (error) {
    console.error('Error reading the product data file:', error);
    process.exit(1); // Exit the process if there's a file reading error
  }
};

// Main execution flow
const run = async ({ filePath, targetCategory, discount, shouldConfigureSettings }) => {
  const algoliaClient = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_API_KEY);
  const algoliaIndex = algoliaClient.initIndex(process.env.ALGOLIA_INDEX);

  const productData = loadProductData(filePath);

  if (shouldConfigureSettings) {
    await configureAlgoliaSettings(algoliaIndex);
  }

  applyCategoryDiscount(productData, targetCategory, discount);
  await uploadToAlgolia(productData, algoliaIndex);
};

// Parse command-line arguments
const args = yargs
  .options({
    filePath: {
      alias: 'f',
      type: 'string',
      describe: 'Path to the product data file',
      default: './data/products.json',
      demandOption: false,
    },
    targetCategory: {
      alias: 'c',
      type: 'string',
      describe: 'Product category to apply discount',
      default: 'Cameras & Camcorders',
      demandOption: false,
    },
    discount: {
      alias: 'p',
      type: 'number',
      describe: 'Percentage discount to apply to the category',
      default: 20,
      demandOption: false,
    },
    shouldConfigureSettings: {
      alias: 's',
      type: 'boolean',
      describe: 'Flag to update Algolia index settings',
      default: false,
      demandOption: false,
    },
  })
  .argv;

// Execute the script if it's not being imported for testing
if (require.main === module) {
  run(args);
}

// Export functions for testing
module.exports = {
  applyCategoryDiscount,
  uploadToAlgolia,
  configureAlgoliaSettings,
  loadProductData,
};
