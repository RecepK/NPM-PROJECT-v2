import express from 'express';
import User from "../models/UserModel.js";


const createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);

        return res
            .status(201)
            .json({
                message: "Create new user",
                state: true
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                error: 'Error.'
            });
    }
}


const temp = async (req, res) => {
    try {
        const user = await User.find();
        return res
            .status(201)
            .json(user);
    } catch (error) {
        return res
            .status(500)
            .json({
                error: 'Error.'
            });
    }
}


export {
    createUser,
    temp
}