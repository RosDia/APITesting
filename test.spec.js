const axios = require('axios');
//const { expect } = require('chai');

const baseUrl = 'https://petstore.swagger.io/v2';

describe('Pet Store API Tests', function () {

it("GET", async () => {
    const response = await axios({
        url: "https://petstore.swagger.io/v2/store/inventory",
        method: "get"
    })
})

  })
 