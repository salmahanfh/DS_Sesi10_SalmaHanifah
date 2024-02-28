const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    
    get iconCart () {return $('.shopping_cart_link');}

    //for validate homepage
    async validateHomePage() {
        expect(browser).toHaveUrlContaining('/inventory.html');
        expect(this.iconCart).toBeDisplayed();
    }

    //for click the icon cart to open cart page
    async cart() {
        await this.iconCart.click();
    }

    open () {
        return super.open('/inventory.html');
    }
}

module.exports =  new HomePage();
