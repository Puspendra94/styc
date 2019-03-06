const userModel = require('../model/user');
const encService = require('../services/encService');

const findUser = async (data) => {
    try {
        const result = await userModel.findUser(data);
        console.log('[USER INFO]',result);
        return result;
    } catch (error) {
        throw error;
    }
}

const signup = async (data) => {
    try {
        console.log(data);
        if (data.password[0] === data.password[1]) {
            data.password = await encService.hash(data.password[0]);
            if (!data.agree_term || data.agree_term===undefined ||data.agree_term==='no') {
                return {success:false, message: 'Plase agree term and conditions'};
            } else {
                const userInfo = await findUser(data);
                console.log(userInfo);
                if (userInfo.length > 0) {
                    return {success:false, message: 'User is already exist'};
                } else {
                    const signupResult = await userModel.signup(data);
                    if (signupResult.affectedRows > 0) {
                        return {success:true, message: 'Log in successfully'};
                    } else {
                        return {success:false, message: 'Error occured,Please try again'};
                    }
                }
            }
        } else {
            return {success: false, message: 'password and confirm password is not matched'};
        }
    } catch (error) {
        console.log(error);
        return {success:false, message: 'Error occured,Please try again'};;
    }
}

const login = async (data) => {
    try {
        const userInfo = await findUser(data);
        if (userInfo.length > 0) {
            const match = await encService.comparePassword({password: data.password, hashPassword:userInfo[0].password});
            return match;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    signup,
    login,
}