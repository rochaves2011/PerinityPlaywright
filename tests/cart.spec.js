const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/login');
const ProductsPage = require('../pages/productpage');
const CartPage = require('../pages/cartpage');

test.describe('Produtos e Carrinho', () => {
  test('Adicionar produto ao carrinho e validar', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('standard_user', 'secret_sauce');

    const products = new ProductsPage(page);
    const productName = 'Sauce Labs Backpack';
    await expect(products.title).toBeVisible();
    await products.addToCart(productName);
    await products.goToCart();

    const cart = new CartPage(page);
    const names = await cart.getItemNames();
    expect(names).toContain(productName);
  });
});
