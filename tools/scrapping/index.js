const puppeteer = require('puppeteer');

// autoejecuted function
(async() => {
    //code
    console.log('Launching browser...');
    // const browser = await puppeteer.launch(); //launches browser
    const browser = await puppeteer.launch({ headless: false });

    const page = await browser.newPage();
    await page.goto('https://es.wikipedia.org/wiki/Node.js');

    var title1 = await page.evaluate(() => {
        const h1 = document.querySelector('h1');
        console.log(h1.innerHTML);

        return h1.innerHTML;
    });

    console.log(title1);

    console.log('Closing browser...');
    browser.close(); //closes browser
    console.log('Browser closed');
})();
