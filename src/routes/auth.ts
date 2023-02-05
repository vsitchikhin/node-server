import express from 'express';
import { PrismaClient } from "@prisma/client";

export default function getAuthRouter(db: PrismaClient) {
    const router = express.Router();

    router.post('/signIn', async (req, res) => {
        const data = req.body.json('this is auth page');
    })

    router.post('/signUp', async (req, res) => {
        const data = req.body.json('this is register page');
    })

    return router;
}