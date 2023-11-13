const axios = require('axios');
const { expect } = require('chai');

const baseUrl = 'https://petstore.swagger.io/v2';

describe('Pet Store', function () {
  var userId;
  var petId;

  it('Verify that allows creating a User', async function () {
    const response = await axios.post(`${baseUrl}/user`, {
      id: 1,
      username: 'RosD',
      firstName: 'Rostyk',
      lastName: 'DD',
      email: 'RD@example.com',
      password: 'Password',
      phone: '0671111111',
    });
      console.log(response.data);

    expect(response.status).to.equal(200);
    userId = response.data.id;
  });

  it('Verify that allows login as a User', async function () {
    const response = await axios.get(`${baseUrl}/user/login?username=RosD&password=password`);
    expect(response.status).to.equal(200);
  });

  it('Verify that allows creating the list of Users', async function () {
    const response = await axios.post(`${baseUrl}/user/createWithList`, 
    [
      {
        "id": 2,
        "username": "TestUsername",
        "firstName": "TestFirstName",
        "lastName": "TestLastName",
        "email": "RDtest@gmail.com",
        "password": "Password1",
        "phone": "0111111111",
        "userStatus": 2
      },
     {
        "id": 3,
        "username": "TestUsername1",
        "firstName": "TestFirstName1",
        "lastName": "TestLastName1",
        "email": "RDtest2@gmail.com",
        "password": "Password1",
        "phone": "0111111111",
        "userStatus": 3
      }
    ]
    );
    expect(response.status).to.equal(200);
  });

  it('Verify that allows Log out User', async function () {
    const response = await axios.get(`${baseUrl}/user/logout`);
    expect(response.status).to.equal(200);  
  });


  it('Verify that allows adding a new Pet', async function () {
    const response = await axios.post(`${baseUrl}/pet`, {
      id: 11,
      name: 'Kuper',
      photoUrls: ['https://dog.com/kuper.jpg'],
      status: 'available',
    });
    expect(response.status).to.equal(200);
    petId = response.data.id;
  });

  it('Verify that allows updating Pet’s image', async function () {
    const response = await axios.post(`${baseUrl}/pet/`, {
        "id": 11,
        photoUrls: ['https://Dog.com/KuperNew.jpg'],
      });
  
  expect(response.status).to.equal(200);
});

  it('Verify that allows updating Pet’s name and status', async function () {
    const response = await axios.post(`${baseUrl}/pet`, {
      "id": 11,
      "name": "KuperNewName",
      "status": "UpdatedStatus"
    });

expect(response.status).to.equal(200);
});

  it('Verify that allows deleting Pet ', async function () {
    const response = await axios.delete(`${baseUrl}/pet/${petId}`);
    expect(response.status).to.equal(200);
  });

after(async function () {
    if (userId) {
      const response = await axios.delete(`${baseUrl}/user/${userId}`);
      expect(response.status).to.equal(200);
    }
  });
});