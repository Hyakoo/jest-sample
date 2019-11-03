/* eslint-disable no-undef */
const axios = require('axios');
const Users = require('../../src/Users');

jest.mock('axios');

describe('module mocking하기', () => {
  it('sample1 - axios', () => {
    const users = [{ name: 'Bob' }];
    const resp = { data: users };
    axios.get.mockResolvedValue(resp);

    // or you could use the following depending on your use case:
    // axios.get.mockImplementation(() => Promise.resolve(resp))

    return Users.all().then((data) => expect(data).toEqual(users));
  });
});
