const puppeteer = require('puppeteer');
const faker = require('faker');

const user = {
  email: faker.internet.email(),
  password: 'test',
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName()
}

console.log('fake user: ', user);

const isDebugging = () => {
  const debugging_mode = {
    headless: false,  // define whether Chromium is open and running
    slowMo: 0,      // slow down operations
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
    // simple test of jest functionality
    expect(2+2).toBe(4);            
  }, 1600) // set timeout for test
  
  test('navbar loads correctly', async() => {  
    // check if navbar element exists
    const navbar = await page.$eval('[data-testid="navbar"]', el => el ? true : false );
    expect(navbar).toBe(true);
  }, 1600)
  
  test('navbar h3 (title) loads correctly', async() => {   
    const html = await page.$eval('[data-testid="navbar h3"]', e => e.innerHTML)    
    expect(html).toBe('Travel Like a Local')            
  }, 1600)
  
  
  test('signup form works correctly', async() => {
    await page.click('[data-testid="signup"]')
    await page.click('[data-testid="username"]')
    await page.type('[data-testid="username"]', user.email)
    
    await page.click('[data-testid="password"]')
    await page.type('[data-testid="password"]', user.password)
    
    await page.click('[data-testid="submit-signup"]')
    
    await page.waitForSelector('[data-testid="success"]')
    
    const successMsg = await page.$eval('[data-testid="success"]', e => e.innerHTML);
    console.log('signup success msg:', successMsg);
    
    expect(successMsg).toBe('Hello ' + user.email +'!')
    
  }, 56600)
  
})

afterAll(() => {
  if ( isDebugging() ) {
    browser.close()
  }
})