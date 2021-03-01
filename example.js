/*
Hello. Thank you for your attention to this test. This is a simple test to demonstrate basic automation skills using JavaScript and Webdriver.io. 
I know that you can add more negative checks to this test, use Page Model Object and other patterns, it will take a little more time. 
Let's discuss it?:)
Best wishes, Vlad
*/

describe('UI Test: Build an automated test for the website registration', () => {
    it('Opening a test site', () => {
        browser.url('http://automationpractice.com/index.php');
        expect(browser).toHaveUrl('http://automationpractice.com/index.php');
        expect(browser).toHaveTitle('My Store');
    })

    it('Opening the identification page', () => {
        browser.maximizeWindow()
        browser.url('http://automationpractice.com/index.php?controller=authentication&back=my-account');
        expect(browser).toHaveUrl('http://automationpractice.com/index.php?controller=authentication&back=my-account');
        expect(browser).toHaveTitle('Login - My Store');
    })

    it('H1 should be visible', () => {
        const h1 = $('h1')
        expect(h1).toBeVisible()
    })

    it('H1 should contain the expected text', () => {
        const text = $('h1').getText()
        const element = $('h1')
        element.waitForExist()
        expect(element).toHaveText('AUTHENTICATION')
    })

    it('Entering RANDOM email for registration', () => {
        var rand1 = Math.floor(Math.random() * 5000) + 1;
        var reg2 = 'test';
        var reg3 = '@gmail.com';
        var reg4 = reg2 + rand1 + reg3;
        const regEmail = reg4;
        const idemail = $('#email_create')
        idemail.addValue(regEmail);
        expect(idemail).toHaveValue(regEmail);
    })

    it('Clicking the button opens the registration form', () => {
        const createBtn = $('#SubmitCreate')
        createBtn.click()
        const createPage = $('h1')
        expect(createPage).toHaveText('CREATE AN ACCOUNT')
    })

    // =================== Start registration form ===================

    it('Negative test - press registration button before data entry', () => {
        const regBTN0 = $('#submitAccount')
        regBTN0.click()
        browser.pause(1000)
    })

    it('Negative test - attempt to register without registration data and checking error message', () => {
        const al1 = $('.alert.alert-danger')
        al1.waitForExist()
        const err1 = $('//*[@id="center_column"]/div/p')
        expect(err1).toHaveText('There are 8 errors')

    })

    it('Data entry in the field: user gender', () => {
        const gend = $('#id_gender1')
        gend.click()
    })

    it('Data entry in the field: First Name', () => {
        const fn = $('#customer_firstname')
        fn.addValue('Vlad')
    })

    it('Data entry in the field: Last Name', () => {
        const lastn = $('#customer_lastname')
        lastn.addValue('Tester')
    })

    it('Data entry in the field: Password', () => {
        const passwd = $('#passwd')
        passwd.addValue('qwertyPASS123')
    })

    it('Data entry in the field: Day of birth', () => {
        const dayID = $('#days')
        dayID.waitForExist()
        dayID.selectByAttribute('value', '5')
    })

    it('Data entry in the field: Month of birth', () => {
        const monthID = $('#months')
        monthID.waitForExist()
        monthID.selectByAttribute('value', '5')
    })

    it('Data entry in the field: Year of birth', () => {
        const yID = $('#years')
        yID.waitForExist()
        yID.selectByAttribute('value', '1985')
    })

    it('Data entry in the field: newsletter subscription', () => {
        const newsSub = $('#newsletter')
        newsSub.click()
    })

    it('Data entry in the field: offers subscription', () => {
        const offers = $('#optin')
        offers.click()
    })

    it('Data entry in the field: Company', () => {
        const firm = $('#company')
        firm.addValue('Tesla WorldWide International')
    })

    it('Data entry in the field: Adress', () => {
        const adress1 = $('#address1')
        adress1.addValue('Main Street 404')
    })

    it('Data entry in the field: City', () => {
        const city = $('#city')
        city.addValue('Texas')
    })

    it('Data entry in the field: State', () => {
        const stateID = $('#id_state')
        stateID.waitForExist()
        stateID.selectByAttribute('value', '43')
    })

    it('Data entry in the field: PostCode', () => {
        const postCodeID = $('#postcode')
        postCodeID.addValue('77590')
    })

    it('Data entry in the field: Country', () => {
        const countryID = $('#id_country')
        countryID.waitForExist()
        countryID.selectByAttribute('value', '21')
    })

    it('Data entry in the field: Additional Info......', () => {
        const otherInfID = $('#other')
        otherInfID.addValue('Additional Info - test field')
    })

    it('Data entry in the field: Home Phone', () => {
        const phoneID = $('#phone')
        phoneID.addValue('+1 214 520 8000')
    })

    it('Data entry in the field: Mobile Phone', () => {
        const mobID = $('#phone_mobile')
        mobID.addValue('+1 214 520 9999')
    })

    it('Assign an address alias for future reference', () => {
        const aliasAdressID = $('#alias')
        aliasAdressID.addValue(' - MY HOME ADDRESS')
        browser.pause(1000)
    })

    it('Positive test - press registration button after data entry', () => {
        const regBTN = $('#submitAccount')
        regBTN.click()
        browser.pause(1000)
    })

})

// If you have reached this place, then you are my hero :)
