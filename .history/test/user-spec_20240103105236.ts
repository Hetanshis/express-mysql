import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/server';

chai.use(chaiHttp);
const expect = chai.expect;

describe('MainRoutes', () => {
  it('should include UserRoutes under /user', async () => {
    const res = await chai.request(app).get('/user/show');
    expect(res.status).to.equal(200);
    
  });
});