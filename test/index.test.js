import { expect, server, BASE_URL } from './setup';

describe('Test home routes', () => {
  it('get index page', done => {
    server
      .get(`${BASE_URL}/`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('Index page');
        done();
      });
  });

  it('get about page', done => {
    server
      .get(`${BASE_URL}/about`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('About page');
        done();
      });
  });
});
