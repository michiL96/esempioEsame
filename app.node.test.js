const request = require('supertest');
const app = require('./app.node.js');

describe('Testo il root', () => {
    test('Dovrebbe darmi 200', (done) => {
        request(app).get('/').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});

describe('Testo una pagina inesistente', () => {
    test('Dovrebbe darmi 404', (done) => {
        request(app).get('/sijdhfsjdhg').then((response) => {
            expect(response.statusCode).toBe(404);
            done();
        });
    });
});

describe('Testo il post dell\'inserimento degli assignment', () => {
    test("Dovrebbe inserire il nuovo assignment", (done) => {
        request(app)
        .post("/aggiunta/")
        .send({
          taskId: 'req.body.taskId',
          workerId: 'req.body.workerId',
          assignmentResult: 'req.body.assignmentResult',
        })
        .then((response) => {
          expect(response.statusCode).toBe(200);
          done();
        });
    });
});

describe('Testo il post dell\'inserimento degli assignment', () => {
    test("Dovrebbe inserire il nuovo assignment", (done) => {
        request(app)
        .post("/modifica/")
        .send({
          taskId: 'bubu',
          assignmentId: '5',
          workerId: 'bubu',
          assignmentResult: 'bubu'
        })
        .then((response) => {
          expect(response.statusCode).toBe(200);
          done();
        });
    });
});

describe('Testo il get degli assignment', () => {
    test("Dovrebbe darmi gli assignment inseriti", (done) => {
        request(app)
        .get("/visualizza/")
        .then((response) => {
          expect(response.statusCode).toBe(200);
          expect(response.body.length).not.toBe(0);
          done();
        });
    });
});

describe('Testo il delete degli assignment', () => {
    test("Dovrebbe eliminare l'assignment con id sbagliato", (done) => {
        request(app)
        .delete("/cancella/2")
        .then((response) => {
          expect(response.statusCode).toBe(500);
          done();
        });
    });
});

describe('Testo il delete degli assignment', () => {
    test("Dovrebbe eliminare l'assignment con id 5", (done) => {
        request(app)
        .delete("/cancella/5")
        .then((response) => {
          expect(response.statusCode).toBe(200);
          done();
        });
    });
});
