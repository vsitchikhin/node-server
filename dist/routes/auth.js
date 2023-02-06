"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
function getAuthRouter(db) {
    const router = express_1.default.Router();
    router.post('/signIn', async (req, res) => {
        const data = req.body.json('this is auth page');
    });
    router.post('/signUp', async (req, res) => {
        const data = req.body.json('this is register page');
    });
    return router;
}
exports.default = getAuthRouter;
