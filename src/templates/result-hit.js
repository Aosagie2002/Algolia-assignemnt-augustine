// Function to create a product hit template with event bindings for tracking
const createResultHitTemplate = (product, eventBinder) => {
  return `
    <a class="result-hit">
      <!-- Product image with alt text for accessibility -->
      <div class="result-hit__image-container">
        <img class="result-hit__image" src="${product.image}" alt="${
    product._highlightResult.name.value
  }" />
      </div>

      <!-- Product details: name and price -->
      <div class="result-hit__details">
        <h3 class="result-hit__name">${product._highlightResult.name.value}</h3>
        <p class="result-hit__price">$${product.price}</p>
      </div>

      <!-- Controls for product actions (View, Add to Cart) -->
      <div class="result-hit__controls">
        <!-- Button for tracking product views via a click event -->
        <button
          ${eventBinder('click', product, 'Product Viewed')}
          id="view-item"
          class="result-hit__view"
        >
          View
        </button>

        <!-- Button for tracking conversions (product added to cart) -->
        <button
          ${eventBinder('conversion', product, 'Product Converted')}
          id="add-to-cart"
          class="result-hit__cart"
        >
          Add To Cart
        </button>
      </div>
    </a>`;
};

export default createResultHitTemplate;
