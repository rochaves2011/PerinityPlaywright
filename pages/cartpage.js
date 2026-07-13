class CartPage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
    this.cartItems = page.locator('.cart_item');
    this.itemNames = () => this.cartItems.locator('.inventory_item_name');
  }

  async getItemNames() {
    return this.itemNames().allTextContents();
  }
}

module.exports = CartPage;