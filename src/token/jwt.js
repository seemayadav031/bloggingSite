const jwt = require('jsonwebtoken')

const genrateToken = async function (payload) {
    try {

        let token = await jwt.sign(payload, 'my@Secret_Key', { expiresIn: '24h' });

        return token

    } catch (error) {

        console.error(`Error! creating jwt token ${error.message}`)

        throw error;

    }
}

const decodeToken = async function (token) {

    try {

         let decodedToken = await jwt.verify( token , 'my@Secret_Key');

         if(!decodedToken) return res.status(400).send({ status : false , message : 'Invalid Token'});

         return decodedToken;

    } catch (error) {

        console.error(`Error! verifying jwt token ${error.message}`)

        return false;
    }

};

module.exports = {
    genrateToken,
    decodeToken
}