const restApiCaller = require('../../callers/rest-api')
const globalVariable = require('../../global-variables.json');

async function signInUser(header, body) {
    console.log(body)
    const caller = new restApiCaller({
        url: globalVariable.__URL__,
        endPoint: '/api/user/signin',
        header: header,
        body: body
    });
    const res = await caller.post();
    return res;
}

async function registerUser(header, body) {
    console.log(body)
    const caller = new restApiCaller({
        url: globalVariable.__URL__,
        endPoint: '/api/user/register',
        header: header,
        body: body
    });
    const res = await caller.post();
    return res;
}

module.exports = { signInUser, registerUser };
