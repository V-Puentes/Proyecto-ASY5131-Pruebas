jest.mock('../lib/db', () => {
  return {
    query: jest.fn(),
  };
});

const db = require('../lib/db');
const request = require('supertest');
const app = require('../app'); // importa esto DESPUÉS del mock

describe('🔍 API con DB mockeada', () => {
  beforeEach(() => {
    db.query.mockReset();
  });

  test('✅ GET /test/productos - Debe retornar array vacío si no hay productos', async () => {
    db.query.mockResolvedValue([[]]);
    const res = await request(app).get('/test/productos');
    expect(res.status).toBe(200);
    expect(res.body).toEqual([]);
  });

  test('✅ POST /test/productos - Debe crear un producto y devolver ID', async () => {
    const mockProducto = { nombre: 'Carta Test' };
    db.query.mockResolvedValue([{ insertId: 1 }]);
    const res = await request(app).post('/test/productos').send(mockProducto);
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ id: 1 });
  });

  test('❌ POST /test/productos - Error si falta el nombre del producto', async () => {
    db.query.mockImplementation(() => {
      throw new Error('Campo nombre requerido');
    });
    const res = await request(app).post('/test/productos').send({});
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error');
  });

  test('✅ GET /test/productos - Devuelve lista con un producto simulado', async () => {
    const productoMock = [{ id: 1, nombre: 'Carta Test' }];
    db.query.mockResolvedValue([productoMock]);
    const res = await request(app).get('/test/productos');
    expect(res.status).toBe(200);
    expect(res.body).toEqual(productoMock);
  });

test('✅ GET /test/api/db-check - Devuelve diagnóstico de base de datos simulado', async () => {
  db.query
    .mockResolvedValueOnce([[{ table_name: 'productos_test' }]])
    .mockResolvedValueOnce([[{ Field: 'id', Type: 'int' }]]);
  const res = await request(app).get('/test/api/db-check');
  expect(res.status).toBe(200);
  expect(res.body.status).toBe('OK');
});

test('❌ GET /test/api/db-check - Devuelve error si falla la consulta', async () => {
  db.query.mockRejectedValue(new Error('Fallo de conexión'));
  const res = await request(app).get('/test/api/db-check');
  expect(res.status).toBe(500);
  expect(res.body).toHaveProperty('error', 'Error de diagnóstico');
})
});
