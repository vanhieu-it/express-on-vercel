const tinNhanModel = require('../models/TinNhan');

// Trả về tất cả các tin nhắn
exports.getAllTinNhan = async (req, res) => {
    try {
        const tinNhans = await tinNhanModel.getAllTinNhan();
        res.json(tinNhans);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Trả về một tin nhắn theo ID
exports.getTinNhanById = async (req, res) => {
    try {
        const tinNhan = await tinNhanModel.getTinNhanById(req.params.id);
        res.json(tinNhan);
    } catch (error) {
        res.status(404).json({ message: 'Tin nhắn không được tìm thấy' });
    }
};

// Tạo một tin nhắn mới
exports.createTinNhan = async (req, res) => {
    const { nguoiTao, noiDung } = req.body;

    if (!nguoiTao || !noiDung) {
        return res.status(400).json({ message: 'Vui lòng cung cấp người tạo và nội dung' });
    }

    try {
        const newTinNhan = await tinNhanModel.createTinNhan(nguoiTao, noiDung);
        res.status(201).json(newTinNhan);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Cập nhật một tin nhắn
exports.updateTinNhan = async (req, res) => {
    const { nguoiTao, noiDung } = req.body;

    if (!nguoiTao || !noiDung) {
        return res.status(400).json({ message: 'Vui lòng cung cấp người tạo và nội dung' });
    }
    try {
        const updatedTinNhan = await tinNhanModel.updateTinNhan(req.params.id, nguoiTao, noiDung);
        res.json(updatedTinNhan);
    } catch (error) {
        res.status(404).json({ message: 'Tin nhắn không được tìm thấy' });
    }
};

// Xóa một tin nhắn
exports.deleteTinNhan = async (req, res) => {
    try {
        await tinNhanModel.deleteTinNhan(req.params.id);
        res.json({ message: 'Tin nhắn đã được xóa' });
    } catch (error) {
        res.status(404).json({ message: 'Tin nhắn không được tìm thấy' });
    }
};
