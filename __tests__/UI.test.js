const puppeteer = require('puppeteer');
const faker = require('faker');
// const devices = require('puppeteer/DeviceDescriptors');
// const iPhone = require['iPhone6'];

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
    slowMo: 250,      // slow down operations, was set to 250 (slow), currently set to 0 (fast)
    devtools: true   // open devtools
  }
  return process.env.NODE_ENV === 'debug' ? debugging_mode : {};
}



let browser;
let page;
let logs = [];
let errors = [];

beforeAll(async() => {
  browser = await puppeteer.launch(isDebugging()); // browser instance
  page = await browser.newPage();  // page instance  
  
  // capture console logs
  page.on('console', c => {
    //console.log(c.text);
    logs.push(c.text)
  });
  
  // capture page errors
  page.on('pageerror', e => errors.push(e.text));
  
  // tell puppeteer where to navigate to in the browser
  await page.goto('http://localhost:3000/')
    
  // set options for page
  page.setViewport({width: 500, height: 2400});
  
  //await page.emulate(iPhone)
  
})



describe('on landing page load', () => {
   
  test('testing suite is functional', async() => {
    // simple test of jest functionality
    expect(2+2).toBe(4); 
    console.log('Running landing page tests....')           
  }, 1600) // set timeout for test
  
  test('Title loads correctly', async () => {
    // check if github link exists
    const title = await page.$eval('[data-testid="title"]', el => el.innerHTML );
    console.log('loaded landing page title: ', title);
    expect(title).toBe("Travel Like A Local");
  }, 1600)
  
  test('get started button loads correctly', async () => {
    // check if submit button exists
    const getStartedButton = await page.$eval('[data-testid="start-submit-button"]', el => el ? true : false );
    console.log('get started button exists: ', getStartedButton)
    expect(getStartedButton).toBe(true);
  }, 1600)
  
  test('login link loads correctly', async () => {
    // check if login link exists
    const login = await page.$eval('[data-testid="login-link"]', el => el ? true : false );
    console.log('login link exist: ', login);
    expect(login).toBe(true);
  }, 1600)
  
  test('github link loads correctly', async () => {
    // check if github link exists
    const github = await page.$eval('[data-testid="bactrians-link"]', el => el ? true : false );
    console.log('team github link exists: ', github);
    expect(github).toBe(true);
  }, 1600)
  
  
  // test('navbar loads correctly', async() => {  
  //   // check if navbar element exists
  //   const navbar = await page.$eval('[data-testid="navbar"]', el => el ? true : false );
  //   expect(navbar).toBe(true);
  // }, 1600)
  
  // test('navbar h3 (title) loads correctly', async() => {   
  //   const html = await page.$eval('[data-testid="navbar h3"]', e => e.innerHTML)    
  //   expect(html).toBe('Travel Like a Local')            
  // }, 1600)
  
 })
 
 describe('UI for get started action', () => { 
 
  test('signup UI works correctly', async () => {
    
    await page.click('[data-testid="start-submit-button"]')
    
    //await page.click('[data-testid="signup"]')
    await page.click('[data-testid="username"]')
    await page.type('[data-testid="username"]', user.email)
    
    await page.click('[data-testid="password"]')
    await page.type('[data-testid="password"]', user.password)
    
    await page.click('[data-testid="submit-signup"]')
    
    await page.waitForSelector(`[data-testid-user="${user.email}"]`)
    
    const usernameSuccess = await page.$eval(`[data-testid-user="${user.email}"]`, e => e ? true : false);
    console.log('signup success usernamme success:', usernameSuccess, 'user: ', user.email);
    
    expect(usernameSuccess).toBe(true)
    // TODO crosscheck with database
    
  }, 556600)
  
  
  // test('does not have any console.logs', () => {
  //   expect(logs.length).toBe(0)
  // })
  
  test('does not have any exceptions', () => {
    expect(errors.length).toBe(0)
  })
  
})

afterAll(() => {
  if ( isDebugging() ) {
    browser.close()
  }
})