jest.mock('../lib/db', () => {
  return {
    query: jest.fn(),
  };
});

const db = require('../lib/db');
const request = require('supertest');
const app = require('../app'); // importa esto DESPUÉS del mock

describe('API con DB mockeada', () => {
  beforeEach(() => {
    db.query.mockReset();
  });

  test('GET /test/productos - Debe retornar array vacío inicial', async () => {
    db.query.mockResolvedValue([[]]); // simula respuesta vacía
    const res = await request(app).get('/test/productos');
    expect(res.status).toBe(200);
    expect(res.body).toEqual([]);
  });

  test('POST /test/productos - Debe crear producto', async () => {
    const mockProducto = {
      nombre: 'Carta Test',
      precio: 1000,
    };
    db.query.mockResolvedValue([{ insertId: 1 }]); // simula insert exitoso
    const res = await request(app)
      .post('/test/productos')
      .send(mockProducto);
    expect(res.status).toBe(201);
  });
});
