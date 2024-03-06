const path = require('path');
const scriptName = path.basename(__filename);
const account = require('../../global-variables.json');


const test_data = {
    "title": scriptName,
    "header": {},
    "body":{
        "name":account.__ACCOUNT__.__USERNAME__,
        "email":account.__ACCOUNT__.__EMAIL__,
        "password":account.__ACCOUNT__.__PASSWORD__
    },
    "expected_result": {
        "status_code":200,
        // "body": {
        //     data: {
        //         "status": "success login",
        //         "status_code": 200,
        //     }
        // },
        // "json_schema": {}
        // // "status": "success login",
        // "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDk2MzM4MzcsImlhdCI6MTcwOTYyMzAzNywidXNlcmlkIjoxfQ.TpMjZW8zjWgrHfK5VDtScp9WfXpbstm1w_o4WjECAlE"
    },
}


module.exports = test_data;