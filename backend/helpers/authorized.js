import jwt from 'jsonwebtoken';
 
/**
 * 
 * @param {*} customer 
 */
export const generateToken = (customer) => {
    //header - payload - signature = JWT token
       //sub = customer._id --> assign customer id to sub claim
    const payload = {sub: customer._id}

    return jwt.sign(payload,process.env.JWT_SECRET,{
        expiresIn:'1h'
    });
}