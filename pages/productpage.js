class ProductsPage { //roberta
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
    this.title = page.locator('.title');
    this.cartLink = page.locator('.shopping_cart_link');
    this.inventoryItem = (name) => page.locator('.inventory_item').filter({ hasText: name });
  }

  async isOnProductsPage() {
    return this.title.isVisible();
  }

  async addToCart(productName) {
    const item = this.inventoryItem(productName);
    const btn = item.locator('button');
    await btn.click();
  }

  async goToCart() {
    await this.cartLink.click();
  }
}

module.exports = ProductsPage;