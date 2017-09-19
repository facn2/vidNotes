const app = require('../server/app'),
      request = require('supertest');

      describe('Test catch all path', () => {
        //using done
          test('It should response the GET method', done => {
              request(app).get('/').then((response) => {
                  expect(response.statusCode).toBe(200);
                  done();
              });
          });
        //using return
          test('It should return the html', ()=>{
            return request(app).get('/').then((response) => {
                expect(response.text).toMatch(/<html>/);
            });
          });

          test('Check type of return', ()=>{
            return request(app).get('/').then((response) => {
                expect(response.header['content-type']).toMatch(/text\/html/);
            });
          });
      });
//TBC
      // describe('Test /add route', () => {
      //   //using done
      //     test('It should response the GET method', done => {
      //         request(app).post('/').then((response) => {
      //             expect(response.statusCode).toBe(200);
      //             done();
      //         });
      //     });
      //   //using return
      //     test('It should return the html', ()=>{
      //       return request(app).get('/').then((response) => {
      //           expect(response.text).toMatch(/<html>/);
      //       });
      //     });
      //
      //     test('Check type of return', ()=>{
      //       return request(app).get('/').then((response) => {
      //           expect(response.header['content-type']).toMatch(/text\/html/);
      //       });
      //     });
      // });
