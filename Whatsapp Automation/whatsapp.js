// To RUN : node filename.js
const puppetter =require('puppeteer');
async function scrape(url){
    const browser=await puppetter.launch({headless:false});
    const page=await browser.newPage();
    await page.goto(url);
    // console.log("Prasanta Selected")
    await page.waitForSelector("span[title='FJP-6 Active Coders']");
    // console.log("Prasanta Selected")
    const target=await page.$("span[title='FJP-6 Active Coders']");
    await target.click();
    const inp =await page.$(
        "#main > footer > div._2BU3P.tm2tP.copyable-area > div > span:nth-child(2) > div > div._2lMWa > div.p3_M1 > div > div._13NKt.copyable-text.selectable-text"
    );
    for(let i=0;i<11;i++){
    for(let j=0;j<i;j++){
        await inp.type("Hi Pulkit !! ");
    }    
        await page.keyboard.press("Enter")
    }
}
scrape("https://web.whatsapp.com/");