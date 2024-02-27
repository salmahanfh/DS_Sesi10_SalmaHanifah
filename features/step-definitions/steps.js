const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page.js');
const HomePage = require('../pageobjects/home.page.js');

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
