const {pool} = require('../config/database');

const findUser = async (data) => {
    try {
        const sql = `SELECT * FROM styc.users where email=?`;
        const result = await pool.query(sql,[data.email]);
        return result[0];
    } catch (error) {
        throw error;
    }
}

const signup = async (data) => {
    try {
        const sql = `insert into users(name, email, password,is_term_accepted,created_at,updated_at) 
        values(?,?,?,${data.agree_term==='no' ? 0 : 1},NOW(),NOW())`;
        const signupResult = await pool.query(sql,[data.name,data.email,data.password]);
        return signupResult[0];
    } catch (error) {
        throw error;
    }
}

const login = async (data) => {

}

module.exports={
    findUser,
    signup,
    login,
}