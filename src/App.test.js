const puppeteer = require('puppeteer');
console.log(puppeteer)

const isDebugging = () => {
  const debugging_mode = {
    headless: false,  // define whether Chromium is open and running
    slowMo: 250,      // slow down operations
    devtools: true   // open devtools
  }
  return process.env.NODE_ENV === 'debug' ? debugging_mode : {};
}

let browser;
let page;

beforeAll(async() => {
  browser = await puppeteer.launch(isDebugging()); // browser instance
  page = await browser.newPage();  // page instance
  
  // tell puppeteer where to navigate to in the browser
  await page.goto('http://localhost:3000/')
  
  // set options for page
  page.setViewport({width: 500, height: 2400});
  
})

describe('on page load', () => {
  
  test('testing is functional', async() => {

  expect(2+2).toBe(4);
            
  }, 1600) // set timeout for test
  
  
  test('h3 loads correctly', async() => {
    
    // look for and select an element
    // const html = await page.$eval('.logo', e => e.innerHTML)
    
    // expect statement / evaluate test
    // expect(html).toBe('Travel Like a Local')
            
  }, 1600) // set timeout for test
  
})

afterAll(() => {
  if ( isDebugging() ) {
    browser.close()
  }
})