const express = require('express');
const cors = require('cors');
const tinNhanRoutes = require('./src/routes/tinNhanRoutes');
const loginRoutes = require('./src/routes/loginRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
const corsOptions = {
  origin: 'http://localhost:3000',  // Thay đổi domain tùy theo ứng dụng của bạn
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

app.use(express.json());

// Sử dụng routes cho tin nhắn
app.use('/api/tinnhan', tinNhanRoutes);
app.use('/api/login', loginRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
