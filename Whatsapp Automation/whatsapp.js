// To RUN : node filename.js
const puppetter =require('puppeteer');
async function scrape(url){
    const browser=await puppetter.launch({headless:false});
    const page=await browser.newPage();
    await page.goto(url);
    // console.log("Prasanta Selected")
    await page.waitForSelector("span[title='SUBHO']");
    // console.log("Prasanta Selected")
    const target=await page.$("span[title='SUBHO']");
    await target.click();
    const inp =await page.$(
        "#main > footer > div._2BU3P.tm2tP.copyable-area > div > span:nth-child(2) > div > div._2lMWa > div.p3_M1 > div > div._13NKt.copyable-text.selectable-text"
    );
    // for(let i=0;i<11;i++){
    // for(let j=0;j<i;j++){
        await inp.type(`Hi <name>,

        Thank you so much for taking the time out of your busy schedule to visit our project. We hope you enjoyed our experience and could learn some valuable insights you can implement in future. It was a very wonderful and insightful meeting with you.
        Feel free to share your experience and ideas with your colleagues who may be interested.
        Thanks again for the opportunity. Warm Regards!
        
        Thanks,
        DuoCoders Team `);
    // }    
        await page.keyboard.press("Enter")
    // }
}
scrape("https://web.whatsapp.com/");