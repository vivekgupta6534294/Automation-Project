//Jis Perfectise
//To Run : node filename 


const puppeteer = require("puppeteer");
const mail="vivekgupta6534294@gmail.com"
const pass="";//Give the password before processing 

(async function(){
    let browser = await puppeteer.launch({ headless: false, defaultViewport: null,args: ['--start-fullscreen'] });
    let page = await browser.newPage();
    await page.goto('https://jis.myperfectice.com/');
    // await waitAndClick('.btn.btn-lg.btn-purple.btn-border.btn-login.ng-scope.waves-effect.waves-effect',page);
    await page.waitForSelector('.btn.btn-lg.btn-purple.btn-border.btn-login.ng-scope.waves-effect.waves-effect',{visible:true});
    await page.click('.btn.btn-lg.btn-purple.btn-border.btn-login.ng-scope.waves-effect.waves-effect');
    
    // Login page 
    // await waitAndClick("input[type='text']",page);
    await page.waitForSelector("input[type='text']",{visible:true});
    await page.click("input[type='text']");
    await page.type("input[type='text']",mail,{delay:100});
    // console.log("Wait kr rha hai");
    // await username(page);
    await page.type("input[type='password']",pass,{delay:100});
    //Submit Button 
    await waitAndClick("button[type='submit']",page);
    //test Section
    // await page.waitForSelector('a[ui-sref="student.availablePracticeSets"]');
        // let testLink=await page.evaluate(function(){
        //     let test=document.querySelector('a[ui-sref="student.availablePracticeSets"]');
        //     test=test.href;
        //     return test;
        // })
        // // let testLink=test.href;
        // let fullLink="https://jis.myperfectice.com/"+ testLink;
        // await page.goto(fullLink);
        // console.log(fullLink);
  //  await waitAndClick('a[ui-sref="student.availablePracticeSets"]',page);
    console.log("Successfully Logged in");

})();

// async function username(page){
//     await page.type("input[type='password']",mail,{delay:100});
//     await page.keyboard.down('Control');
//     await page.keyboard.press('A');
//     await page.keyboard.press('X');
//     await page.keyboard.up('Control');
//     await waitAndClick("input[type='text']",page);
//     await page.keyboard.down('Control');
//     await page.keyboard.press('A');
//     await page.keyboard.press('V');
//     await page.keyboard.up("Control");

// }
async function waitAndClick(selector,page){
    await page.waitForSelector(selector);
    await page.click(selector);
}