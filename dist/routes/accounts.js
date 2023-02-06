"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
function getAccountsRouter(db) {
    const router = express_1.default.Router();
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
exports.default = getAccountsRouter;
