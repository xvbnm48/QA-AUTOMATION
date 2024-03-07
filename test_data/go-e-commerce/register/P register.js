const path = require('path');
const scriptName = path.basename(__filename);
const account = require('../../../global-variables.json');
let randomStringForEmail = Math.floor(Math.random() * 1000)
const test_data = {
    "title": scriptName,
    "header": {},
    "body": {
        "name": account.__ACCOUNT__REGISTER.__USERNAME__,
        "email": account.__ACCOUNT__REGISTER.__EMAIL__ + randomStringForEmail + "@gmail.com",
        "password": account.__ACCOUNT__REGISTER.__PASSWORD__
    },
    "expected_result": {
        "status_code": 200,
        // "body": {
        //     "data": {
        //         "status": "success register",
        //         "status_code": 200,
        //     }
        // },
        "json_schema": {}
    }
}

module.exports = test_data;