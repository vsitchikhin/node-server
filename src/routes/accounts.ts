import express from 'express';
import {PrismaClient} from '@prisma/client';

export default function getAccountsRouter(db: PrismaClient) {
    const router = express.Router();

    router.get('/', async (req, res) => {
        res.json('this is accounts page');
    });

    router.get('/:id(^[0-9]+$)', async (req, res) => {
        res.json(`this is account ${req.params.id} page`);
    });

    router.post('/:id(^[0-9]+$)', async (req, res) => {
        res.json(`create account ${req.params.id}`);
    });

    router.put('/:id(^[0-9]+$)', async (req, res) => {
        res.json(`update account ${req.params.id}`);
    });

    router.patch('/:id(^[0-9]+$)', async (req, res) => {
        res.json(`partial update account ${req.params.id}`);
    });

    router.delete('/:id(^[0-9]+&)', async (req, res) => {
        res.json(`delete account ${req.params.id}`);
    });

    return router;
}