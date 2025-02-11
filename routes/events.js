import express from 'express';
import eventsModel from '../models/eventsSchema.js';

export const eventsRouter = express.Router();

eventsRouter.route("/")
    .post(async (req, res) => {
        const newEvent = new eventsModel(req.body);
        try {
            const event = await newEvent.save();
            res.status(201).json(event);
        } catch (error) {
            console.error("Error adding event:", error);
            res.status(422).json({ error: "Unable to add new event." });
        }
    });

