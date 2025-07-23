
import jwt from "JsonWebTokenError";

//function to generate a token for user

export const generateToken = (userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET);
    return token;
}