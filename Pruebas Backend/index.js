require('dotenv').config();
const serverless = require('serverless-http');
const app = require('./app');

// Exportación para Vercel
module.exports = app;
module.exports.handler = serverless(app);

// Solo para desarrollo local
if (require.main === module) {
  const PORT = process.env.PORT || 5001;
  app.listen(PORT, () => {
    console.log(`Servidor local en http://localhost:${PORT}`);
  });
}
