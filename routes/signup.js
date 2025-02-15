import express from 'express';
import UserModel from '../models/userSchema';

export const signUpRouter = express.Router();

signUpRouter.route("/")
    .get(async (req, res) => {
        try {
            const user = await UserModel.find({});
            res.json(user);
        } catch (error) {
            res.status(404).json({error: "User not found"});
        }
    })
    .post(async (req,res) => {
        const email = req.body;
        try {
            UserModel.findOne({email} , user => {
                if(user) {
                    res.send({ message: "Account already exists!"});
                }else{
                    const newUser = new UserModel(req.body);
                    newUser.save();
                }
            })
        } catch (error) {
            res.send({message: " Unable to register right now, please try again later."})
        }
    })