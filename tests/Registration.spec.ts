import { expect, test } from '@playwright/test';



test.use({headless:false});
test.describe('Test Registration', () => {
    test('Test Client Registration', async ({ page }) => {
      var libName = 'Automation '+Date.now();
      var userEmail = "adelev@M365x04904127.onmicrosoft.com";
      page.goto('https://test.altorney.com/');
      await expect(page.locator('[alt="Altorney Logo"]'), 'Dashboard is displaying').toBeVisible();
      await page.waitForTimeout(5000);
      await page.click('.join-button');
      await page.waitForTimeout(2000);
      await page.click('text=Client');
      await expect(page.locator('text=Create Client Account'),'Create Client Account').toBeVisible();
      await page.click('text=Submit');
      await expect(page.locator('text= First Name is required '),' First Name is required ').toBeVisible();
      await expect(page.locator('text= Last Name is required '),' Last Name is required ').toBeVisible();
      await expect(page.locator('text= Email is required '),' Email is required ').toBeVisible();
      await expect(page.locator('text= Password is Required ').first(),' Password is Required ').toBeVisible();
      await expect(page.locator('text= Confirm Password is Required ').last(),' Confirm Password is Required ').toBeVisible();
      await expect(page.locator('text= Please check to accept '),' Please check to accept ').toBeVisible();

      await page.waitForTimeout(15000);
      // await page.waitForSelector('[type="button"]',{timeout:90000});
      // await page.waitForTimeout(3000);
      // // await page.click('[type="button"]');
      // // await page.click('text=QorusDocs File Library');
      // // await page.waitForTimeout(5000);
      // // await page.waitForSelector('.sc-jYCGvq');
      // // await page.waitForTimeout(15000);
      // // const elementHandle = await page.$('.sc-jYCGvq')
      // // const frame = await elementHandle.contentFrame()
      // // await frame.fill('input[title="library name"]',libName);
      // // await frame.fill('[data-testid="user-selector"]>* input',userEmail);
      // // await frame.click('div.customsearchitem-module_searchResult__16sqK');
      // // await frame.click('text=Create file library');
      // // await expect(page.locator('text='+libName+''),'Library Created').toBeVisible();

      // let listItems = page.locator('tbody>tr>td:nth-child(13)');
      // await listItems.nth(9).waitFor(); 
      // await page.waitForTimeout(5000);
      
      // for (let i = 10; i < 60; i++) {
      //   await listItems.nth(i).click();
      //   await page.click('span.actionmenuitem-module_actionText__GOJEN:visible:has-text("Delete")');
      //   await page.click('.modal-module_modalDialog__1c7Xe>* .clickbutton-module_active__13RWR');
      //   await page.waitForTimeout(15000);
      // }
    });
  });