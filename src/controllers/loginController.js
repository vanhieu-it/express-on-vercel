const loginModel = require('../models/Login');

// Cập nhật một tin nhắn
exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Truy vấn người dùng từ cơ sở dữ liệu
        const result = await loginModel.checkLogin(username, password);

        if (result.rows.length === 0) {
            return res.status(401).json({ success: false, message: 'Invalid username or password' });
        }

        res.json({ success: true,  message: 'Success' });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};