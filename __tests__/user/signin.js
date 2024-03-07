const { describe } = require('@jest/globals');
const userSignin = require('../../collections/users/auth');
const verifyResponse = require('../../helpers/verify');

let testData = require('require-all')({
    dirname: __dirname+'../../../test_data/go-e-commerce/signin',
})
console.log(`ekspetasi layen test ${testData.expected_result}`);

describe('Test login user', () => {
    // console.log(`test ${title}`);
    console.log(`ekspetasi layen test ${testData.expected_result}`);
    test.each(Object.values(testData))(
        "Test $title", async ({body,expected_result}) => {
            res = await userSignin.signInUser({}, body);
            // console.log(res.body);
            // let responseCode = res.status;
            verifyResponse.verifyResponse(res, expected_result);
            // expect(res.status).toBe(expected_result);
        }
    )
});