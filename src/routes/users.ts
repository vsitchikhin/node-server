import express from 'express';
import { PrismaClient } from '@prisma/client';



export default function getUserRouter(db: PrismaClient) {
    const router = express.Router();

    router.get('/:id(^[0-9]+&)', async (req, res) => {
        const data = req.body.json();
        res.json(`this is user ${req.params.id} page`)
    })

    router.delete('/:id(^[0-9]+&)', async (req, res) => {
        res.json(`delete user ${req.params.id}`)
    })

    return router;
}