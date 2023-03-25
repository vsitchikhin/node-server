import express from 'express';
import { PrismaClient } from '@prisma/client';

export default function getEmailRoutes(db: PrismaClient) {
    const router = express.Router();

    router.post('/:id(^[0-9]+&)', async (req, res) => {

        const data = req.body;

        const response = await sendEmail(data);

        console.log(response);
        res.json(response);
    })

    return router;
}