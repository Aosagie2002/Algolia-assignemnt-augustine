const {
  applyCategoryDiscount,
  uploadToAlgolia,
  configureAlgoliaSettings,
  loadProductData,
} = require('./algoliaDiscount');
const algoliasearch = require('algoliasearch');
const fs = require('fs');

// Mocking the Algolia client
jest.mock('algoliasearch');

describe('Product Discount and Algolia Upload Tests', () => {
  let products;
  let algoliaIndex;

  // Set environment variables for testing
  beforeAll(() => {
    process.env.ALGOLIA_APP_ID = 'test_app_id';
    process.env.ALGOLIA_API_KEY = 'test_api_key';
    process.env.ALGOLIA_INDEX = 'test_index';
  });

  beforeEach(() => {
    products = [
      { name: 'Camera 1', price: 100, categories: ['Cameras & Camcorders'] },
      { name: 'Camera 2', price: 200, categories: ['Cameras & Camcorders'] },
      { name: 'Tripod', price: 50, categories: ['Accessories'] },
    ];

    // Mocking the Algolia index methods
    algoliaIndex = {
      saveObjects: jest.fn().mockResolvedValue(true),
      setSettings: jest.fn().mockResolvedValue(true),
    };

    // Mocking the Algolia client initialization
    algoliasearch.mockReturnValue({
      initIndex: jest.fn().mockReturnValue(algoliaIndex),
    });
  });

  test('should apply discount to products in the specified category', () => {
    const discountCount = applyCategoryDiscount(products, 'Cameras & Camcorders', 20);

    expect(discountCount).toBe(2);
    expect(products[0].price).toBe(80); // 100 - 20%
    expect(products[1].price).toBe(160); // 200 - 20%
    expect(products[2].price).toBe(50);  // No discount
  });

  test('should upload updated products to Algolia', async () => {
    const result = await uploadToAlgolia(products, algoliaIndex);

    expect(result).toBe(true);
    expect(algoliaIndex.saveObjects).toHaveBeenCalledWith(products, { autoGenerateObjectIDIfNotExist: true });
  });

  test('should configure Algolia index settings', async () => {
    await configureAlgoliaSettings(algoliaIndex);

    expect(algoliaIndex.setSettings).toHaveBeenCalledWith({
      searchableAttributes: ['name', 'description'],
      customRanking: ['desc(rating)', 'desc(popularity)'],
      attributesForFaceting: ['brand', 'categories'],
    });
  });
});
