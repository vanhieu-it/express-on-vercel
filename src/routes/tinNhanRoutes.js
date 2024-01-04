const express = require('express');
const router = express.Router();
const tinNhanController = require('../controllers/tinNhanController');

// Định nghĩa các routes cho tin nhắn
router.get('/', tinNhanController.getAllTinNhan);
router.get('/:id', tinNhanController.getTinNhanById);
router.post('/', tinNhanController.createTinNhan);
router.put('/:id', tinNhanController.updateTinNhan);
router.delete('/:id', tinNhanController.deleteTinNhan);

module.exports = router;
