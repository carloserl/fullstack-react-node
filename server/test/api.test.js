import request from 'supertest'
import app from '../src/index.js'
import chai from 'chai';
import chaiHttp from 'chai-http';

chai.should();
chai.use(chaiHttp);

describe('Files Api: ', () => {


    describe('GET supertest /files/data', function () {
        it('List all file with data', function (done) {
            request(app)
                .get('/files/data')
                .expect(200, done);
        });
    });


    describe('GET supertest /files/list', function () {
        it('List all files', function (done) {
            request(app)
                .get('/files/list')
                .expect(200, done);
        });
    });

    describe('/GET chai /files/list', () => {
        it('it should GET all the files', (done) => {
          chai.request(app)
              .get('/files/list')
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.length.should.be.eql(7);
                done();
              });
        });
    });

    describe('/GET chai /files/list', () => {
        it('Not should GET all the files', (done) => {
          chai.request(app)
              .get('/files/lis')
              .end((err, res) => {
                    res.should.have.status(404);
                done();
              });
        });
    });

    describe('/GET chai /files/data', () => {
        it('it should GET all the files', (done) => {
          chai.request(app)
              .get('/files/data')
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.length.should.be.eql(4);
                done();
              });
        });
    });


    describe('/GET chai /files/datas', () => {
        it('Not should GET all the files formated', (done) => {
          chai.request(app)
              .get('/files/datas')
              .end((err, res) => {
                    res.should.have.status(404);
                done();
              });
        });
    });

    describe('/GET chai /files/data?fileName=<fileName>', () => {
        it('it should GET a the files', (done) => {
          chai.request(app)
              .get('/files/data?fileName=test2.csv')
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.length.should.be.eql(1);
                done();
              });
        });
    });


})
