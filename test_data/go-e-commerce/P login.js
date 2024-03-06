const path = require('path');
const scriptName = path.basename(__filename);


const test_data = {
    "title": scriptName,
    "header": {},
    "body":{
        "name":"vini",
        "email":"vini@hiradazzle.com",
        "password":"vini123"
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