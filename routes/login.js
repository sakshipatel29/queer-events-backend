import express from 'express';
import UserModel from '../models/userSchema.js';

export const logInRouter = express.Router();

logInRouter.route("/")
    .post((req, res) => {
        const { email, password } = req.body;
        try {
            const data = UserModel.findOne({ email });
            if( data && password === data.password){
                return res.send({ user });
            } else {
                return res.send({ message: "Incorrect email or password." });
            }
        } catch (error) {
            console.log(error);
            return res.send({ message: "Unable to login right now Please try again later!" });
        }
    })