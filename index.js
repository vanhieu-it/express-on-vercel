const express = require('express');
const cors = require('cors');
const tinNhanRoutes = require('./src/routes/tinNhanRoutes');
const loginRoutes = require('./src/routes/loginRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
const allowedOrigins = [
  'http://localhost:3000',
  'https://react-login-app-gray.vercel.app',
  // Thêm các domain khác nếu cần
];

const corsOptions = {
  origin: (origin, callback) => {
    // Kiểm tra xem origin có trong danh sách được phép hay không
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
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
