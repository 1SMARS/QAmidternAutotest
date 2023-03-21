const LoginPage = require( "../pageobjects/LoginPage");


describe('Clients Suit', ()=> {
    beforeEach( async() => {
        await LoginPage.open();
        await LoginPage.doLogin('Admin', 'Admin@Navi')
    })

    afterEach( async()=>{
        await browser.reloadSession();
    })

    it('Create client', async ()=> {
        // create client
        await $('button.clients-add-user-dialog').click();
        await browser.pause(5000);

        // check
        const userForm = await $('div.add-user-modal form');
        await expect(userForm).toExist();

        // fill data
        const surnameField = await $('input[formcontrolname="userSurname"]');
        await surnameField.setValue('Usersurname');

        const firstnameField = await $('input[formcontrolname="userName"]');
        await firstnameField.setValue('Username');

        const maleOptionRadio = await $('mat-radio-group mat-radio-button:nth-child(1) div[class="mat-radio-label-content"]');
        await maleOptionRadio.click();

        const emailField = await $('input[formcontrolname="email"]');
        await emailField.setValue('usermail12@gmail.com');

        const phoneNumberField = await $('input[formcontrolname="phone"]');
        await phoneNumberField.setValue('996766567059');

        const datebirthField = await $('input[formcontrolname="birthday"]');
        await datebirthField.setValue('02.10.2005');

        const saveButton = await $('button[name="save"]');
        await saveButton.click();
        await browser.pause(10000);

        // accept alert 
        await browser.acceptAlert();
        await browser.pause(5000);
    })

    it('Open to read and edit', async() => {
        //view created client
        const clientNameLink = await $('tbody tr:nth-child(1)');
        await clientNameLink.waitForClickable();
        await clientNameLink.click();
        await browser.pause(5000);

        //update created client
        const surnameFieldUpdate = await $('input[placeholder="Фамилия"]');
        await surnameFieldUpdate.setValue('UpdatedUsersurname');

        const firstnameFieldUpdate = await $('input[placeholder="Имя"]');
        await firstnameFieldUpdate.setValue('UpdatedUsername');
        
        const thirdFieldUpdate = await $('input[placeholder="Отчество"]');
        await thirdFieldUpdate.setValue('UserPatronymic');

        const birthDateFieldUpdate = await $('input[placeholder="Дата рождения"]');
        await birthDateFieldUpdate.setValue('10.04.2002');

        const saveButton = await $('button[name="save"]');
        await saveButton.click();
        await browser.pause(5000);

        //accept alert 
        await browser.acceptAlert();
        await browser.pause(5000);
    })


    it('Create coupon', async() => {
        //open coupon list
        const couponLinkList = await $('a[href="/coupons"');
        await couponLinkList.click();
        await browser.pause(5000);

        //create coupon
        await $('button.crm-button').click();
        await browser.pause(5000);

        const optionRadio = await $('mat-radio-group mat-radio-button:nth-child(1)');
        await optionRadio.click();

        const clientField = await $('input[formcontrolname="ClientFullName"]');
        await clientField.setValue('ClientName');

        const benefitField = await $('input[formcontrolname="Benefit"]');
        await benefitField.setValue('22');

        const beginDateField = await $('input[formcontrolname="BeginDate"]');
        await beginDateField.setValue('10');

        const endDateField = await $('input[formcontrolname="EndDate"]');
        await endDateField.setValue('12');

        await $('button.coupons-save__button').click();

        await browser.pause(5000);

        //accept alert 
        await $('mat-dialog-actions span.mat-button-wrapper').click();
        await browser.pause(5000);

    })
})