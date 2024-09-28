import express from 'express';
import User from "../models/UserModel.js";


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
    temp
}