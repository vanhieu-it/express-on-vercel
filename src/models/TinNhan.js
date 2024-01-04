const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});

const getAllTinNhan = async () => {
    const result = await pool.query('SELECT * FROM tin_nhan');
    return result.rows;
};

const getTinNhanById = async (id) => {
    const result = await pool.query('SELECT * FROM tin_nhan WHERE id = $1', [id]);
    return result.rows[0];
};

const createTinNhan = async (nguoiTao, noiDung) => {
    const result = await pool.query('INSERT INTO tin_nhan (nguoi_tao, noi_dung) VALUES ($1, $2) RETURNING *', [nguoiTao, noiDung]);
    return result.rows[0];
};

const updateTinNhan = async (id, nguoiTao, noiDung) => {
    const result = await pool.query('UPDATE tin_nhan SET nguoi_tao = $2, noi_dung = $3 WHERE id = $1 RETURNING *', [id, nguoiTao, noiDung]);
    return result.rows[0];
};

const deleteTinNhan = async (id) => {
    await pool.query('DELETE FROM tin_nhan WHERE id = $1', [id]);
};

module.exports = {
    getAllTinNhan,
    getTinNhanById,
    createTinNhan,
    updateTinNhan,
    deleteTinNhan
};
