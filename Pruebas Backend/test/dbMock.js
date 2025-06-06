const mockDB = [];

const pool = {
  query: async (sql, params) => {
    if (sql.includes('SELECT')) {
      return [[...mockDB]];
    }

    if (sql.includes('INSERT')) {
      const producto = {
        id: mockDB.length + 1,
        ...Object.fromEntries(sql.match(/\((.*?)\)/)[1].split(',').map((key, i) => [key.trim().replace(/`/g, ''), params[i]]))
      };
      mockDB.push(producto);
      return [{ insertId: producto.id }];
    }

    return [[]];
  }
};

module.exports = { pool };
