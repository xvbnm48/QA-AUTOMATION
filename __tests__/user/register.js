const { describe } = require('@jest/globals');
const userRegister = require('../../collections/users/auth');
const verifyResponse = require('../../helpers/verify');


let testData = require('require-all')({
    dirname: __dirname + '../../../test_data/go-e-commerce/register',
})

describe('Test register user', () => {
    // console.log(`test ${title}`);
    test.each(Object.values(testData))(
        "Test $title", async ({ body, expected_result }) => {
            res = await userRegister.registerUser({}, body);
            // let responseCode = res.status;
            console.log(`ekspetasi result ${expected_result}`);

            verifyResponse.verifyResponse(res, expected_result);
            // expect(res.status).toBe(expected_result);
        }
    )
})