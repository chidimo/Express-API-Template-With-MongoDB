import { expect, server, BASE_URL } from './setup';

describe('Test home routes', () => {
  it('get messages page', done => {
    server
      .get(`${BASE_URL}/messages`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.messages).to.be.instanceOf(Array);
        res.body.messages.forEach(m => {
          expect(m).to.have.property('name');
          expect(m).to.have.property('message');
        });
        done();
      });
  });

  it('posts messages', done => {
    const data = { name: 'some name', message: 'new message' };
    server
      .post(`${BASE_URL}/messages`)
      .send(data)
      .expect(201)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body.success).to.equal(true);
        expect(res.body.message).to.have.property('name', data.name);
        expect(res.body.message).to.have.property('message', data.message);
        done();
      });
  });
});
