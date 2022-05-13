const jwt = require('jsonwebtoken');
const User = require('../models/User');

const getUserById = async (token) => {

    if(!token){
        return resizeBy.statys(401).json({message: 'Acesso negado!'});
    }

    const decoded = jwt.verify(token, 'nossosecret');
    const userId = decoded.id;

    const user = await User.findOne({_id: userId});
    return user;
}

module.exports = getUserById;