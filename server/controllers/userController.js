import { generateToken } from "../lib/utils.js";
import User from "../models/user.js";
import bcrypt from "bcryptjs"

//Signup a new user

export const signup = async (req, res) => {
    const { fullName, email, password, bio } = req.body;

    try {
        if (!fullName || !email || !password || !bio) {
            return res.json({ success: false, message: "Missing Details" })
        }
        const user = await User.findOne({ email });

        if (user) {
            return res.json({ success: false, message: "Account already exist" })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.genSalt.hash(password, salt);

        const newUser = await User.create({
            fullName, email, password: hashedPassword, bio
        });

        const token = generateToken(newUser._id)

        res.json({ success: true, userData: newUser, token, message: "Account created successfully" })

    } catch (error) {
        console.log(error.message);

        res.json({ success: false, message: error.message })

    }

}

//controller to user Login

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userData = await User.findOne({ email })

        const isPasswordCorrect = await bcrypt.compare(password, userData.password);

        if (!isPasswordCorrect) {
            return res.json({ success: false, message: "Invalid credentials" });
        }

        const token = generateToken(newUser._id)

        res.json({ success: true, userData, token, message: "Login Successful" })




    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message })

    }
}


// controller to check if user is authenticated

// 2hr 53 min