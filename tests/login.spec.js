const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/login');

test.describe('Auth - Login', () => {
  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
  });

  test('Login com sucesso - standard_user', async ({ page }) => {
    const login = new LoginPage(page);
    await login.login('standard_user', 'secret_sauce');
    await page.pause();

    await expect(page).toHaveURL(/.*inventory.html/);
    await expect(page.locator('.title')).toHaveText('Products');
  });

  test('Login inválido - credenciais incorretas', async ({ page }) => {
    const login = new LoginPage(page);
    await login.login('invalid_user', 'wrong_pass');

    const err = page.locator('[data-test="error"]');
    await expect(err).toBeVisible();
    await expect(err).toContainText('Username and password');
  });
});