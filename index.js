const express = require('express');
const tinNhanRoutes = require('./src/routes/tinNhanRoutes');
const pool = require('./src/db');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Kết nối đến cơ sở dữ liệu PostgreSQL
pool.connect();

app.use(express.json());

// Sử dụng routes cho tin nhắn
app.use('/api/tinnhan', tinNhanRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
