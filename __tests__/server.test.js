// Run mockRequests to server without server having to be running live

// Require app from server.js, deconstruct app
const { app } = require('../server.js');
// Require supertest
const supertest = require('supertest');
// Feed app into supertest and assing to mockRequest variable
const mockRequest = supertest(app);

// Test that route responds with correct info
describe('API Server', () => {
  test('handles the root path', async () => {
    const response = await mockRequest.get('/');

    expect(response.status).toBe(200);
    expect(response.text).toBeTruthy();
    // below text is from server.js'/' route that points to logger.js
    expect(response.text).toEqual('this is a log!');
  });

  test('handles invalid requests', async () => {
    const response = await mockRequest.get('/foo');

    expect(response.status).toEqual(404);
  });

  test('handles error', async () => {
    const response = await mockRequest.get('/bad');
    console.log(response);
    expect(response.status).toEqual(500);
    expect(response.body.route).toEqual('/bad');
  });

});
