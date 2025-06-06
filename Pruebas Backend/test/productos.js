const express = require('express');
const router = express.Router();
const cors = require('cors');
const db = require('../lib/db');

router.use(cors({
  origin: ['http://localhost:5175', 'https://tu-frontend.com'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

// GET de productos 
router.get('/productos', async (req, res) => {
  try {
    const [productos] = await db.query('SELECT * FROM productos');
    res.json(productos);
  } catch (error) {
    console.error('❌ Error de conexión:', error.message);
    res.status(500).json({ error: 'Error de conexión a la base de datos' });
  }
});

// POST /test/productos
router.post('/productos', async (req, res) => {
  try {
    const [result] = await db.query(
      'INSERT INTO productos_test (nombre) VALUES (?)',
      [req.body.nombre]
    );
    res.status(201).json({ id: result.insertId });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Diagnóstico
router.get('/api/db-check', async (req, res) => {
  try {
    const [tables] = await db.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = DATABASE()
    `);
    
    const [columns] = await db.query('DESCRIBE Producto');

    res.json({
      status: 'OK',
      tables: tables.map(t => t.table_name),
      productColumns: columns
    });
  } catch (error) {
    res.status(500).json({ 
      error: 'Error de diagnóstico',
      details: error.message 
    });
  }
});

module.exports = router;
