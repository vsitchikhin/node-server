"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
function getUserRouter(db) {
    const router = express_1.default.Router();
    router.get('/:id(^[0-9]+&)', async (req, res) => {
        const data = req.body.json();
        res.json(`this is user ${req.params.id} page`);
    });
    router.delete('/:id(^[0-9]+&)', async (req, res) => {
        res.json(`delete user ${req.params.id}`);
    });
    return router;
}
exports.default = getUserRouter;
