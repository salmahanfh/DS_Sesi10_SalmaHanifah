const { Given, When, Then, And } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page.js');
const HomePage = require('../pageobjects/home.page.js');
const ProductPage = require('../pageobjects/product.page.js');

Given(/^Salma is on the login page$/, async () => {
    await LoginPage.open();
});

When(/^Salma login with "(.*)" credential$/, async (username) => {
    await LoginPage.login(username);
});

Then(/^Salma should see home page$/, async () => {
    await HomePage.validateHomePage();
});

Then(/^Salma should see error "(.*)"$/, async (message) => {
    await LoginPage.validateLockedOutUserError(message);
});

And(/^Salma login with "(.*)" credential$/, async (username) => {
    await LoginPage.login(username);
});

And(/^Salma should see home page$/, async () => {
    await HomePage.validateHomePage();
});

When(/^Salma click a product$/, async () => {
    await HomePage.clickProduct();
});

Then(/^Salma should see the product detail$/, async (message) => {
    await ProductPage.validateProductDetail() 
});