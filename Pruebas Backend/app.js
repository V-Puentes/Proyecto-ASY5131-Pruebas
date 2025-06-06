// app.js
const express = require('express');
const cors = require('cors');
const productosRouter = require('./test/productos');

const app = express();

const corsOptions = {
  origin: [
    'https://pocketcenter.vercel.app',
    'http://localhost:3000'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/test/health', (req, res) => {
  res.json({
    status: 'OK',
    frontend_url: 'https://pocketcenter.vercel.app',
    backend_url: 'https://pocketcenter-backend.vercel.app',
    database_status: 'connected',
    timestamp: new Date().toISOString()
  });
});

app.get('/', (req, res) => {
  res.json({
    message: 'Bienvenido a la API',
    endpoints: [
      '/test/health',
      '/test/productos'
    ]
  });
});

app.use('/test', productosRouter);

// Manejo de errores
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

module.exports = app;
