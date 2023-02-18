import express from 'express';
import { PrismaClient } from "@prisma/client";
import { signIn, signUp } from "../controllers/auth/AuthController";
import { salt } from "../app";

export default function getAuthRouter(db: PrismaClient) {
    const router = express.Router();

    router.post('/signin', async (req, res) => {
        const data = req.body;

        const response = await signIn(data, salt, db);

        console.log(response);
        res.json(response);
    });

    router.post('/signup', async (req, res) => {
        const data = req.body;

        const response = await signUp(data, salt, db);

        res.json(response);
    });

    return router;
}