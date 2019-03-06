const contactModel = require('../model/contact');
const {sendMail} = require('../services/EmailService');

const submitContactUsForm = async (data) => {
    try {
        const contactResult = await contactModel.submitContactUsForm(data);
        if (contactResult.affectedRows > 0) {
            const mailResult = await sendMail(`<div style="align: center;">
            <h1>Name: ${data.name}</h1></hr>
            <h4>Email: ${data.email}</h4>
            <p>${data.message}</p>
            </div>`);
            return {success: true, message: 'Query submitted successfully'}
        }
        return {success: true, message: 'Failed to send your query\nPlease try again'};
    } catch (error) {
        return {success: true, message: 'Failed to send your query\nPlease try again'};
    }
}

module.exports ={
    submitContactUsForm,
}