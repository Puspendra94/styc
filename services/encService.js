const bcrypt = require('bcryptjs');
const key = "Styc1;1cytS";

const hash = async (data) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(data, salt);
        return hash;
    } catch (error) {
        console.log('[ERROR WHILE HASHING]',error);
        throw error;
    }
}

const comparePassword = async (data) => {
    try {
        const match = bcrypt.compareSync(data.password, data.hashPassword);
        return match;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    hash,
    comparePassword,
}