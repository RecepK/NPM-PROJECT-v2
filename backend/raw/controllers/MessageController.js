import express from 'express';
import Message from "../models/MessageModel.js";

const getMessage = async (req, res) => {
    try {
        const messages = await Message.find();
        return res
            .status(201)
            .json(messages);
    } catch (error) {
        return res
            .status(500)
            .json({
                error: 'Error.'
            });
    }
}

const sendMessage = async (req, res) => {
    try {
        const newMessage = await Message.create(req.body);

        return res
            .status(201)
            .json({
                message: "Send new Message",
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
        return res
            .status(201)
            .json({
                message: "123",
                data: ["A", "B", "C"],
                book: [{
                    title: "A"
                }, {
                    title: "B"
                }]
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                error: 'Error.'
            });
    }
}


export {
    getMessage,
    sendMessage,
    temp
}