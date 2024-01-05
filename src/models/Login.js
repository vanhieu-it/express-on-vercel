pool = require('../db.js');

const checkLogin = (username, password) => {
    try {
        // Truy vấn từ bảng users để kiểm tra đăng nhập
        return pool.query('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password]);
    } catch (error) {
        // Xử lý lỗi nếu có
        console.error('Error checking login:', error);
    }
};

module.exports = {
    checkLogin
};
