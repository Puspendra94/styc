const {pool} = require('../config/database');


const submitContactUsForm = async (data) => {
    try {
        const query = `insert into contact_us(name,email,message,created_at,updated_at) values(?,?,?,NOW(),NOW())`;
        const [rows, fields] = await pool.query(query, [data.name, data.email,data.message]);
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports ={
    submitContactUsForm,
}