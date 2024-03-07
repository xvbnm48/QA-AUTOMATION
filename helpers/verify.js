const { matchers } = require('jest-json-schema');
expect.extend(matchers);

function verifyResponse(actual, expected) {
    expect(actual.statusCode).toBe(expected.status_code);
    // expect(JSON.stringify(actual.body)).toEqual(expected.status_code)
    // expect(actual.status).toBe(200);
    // expect(actual.body).toMatchObject(expected.body)
    // expect(actual.body).toMatchSchema(expected.json_schema)
}

module.exports = {
    verifyResponse
}