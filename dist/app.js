"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const users_1 = __importDefault(require("./routes/users"));
const accounts_1 = __importDefault(require("./routes/accounts"));
const auth_1 = __importDefault(require("./routes/auth"));
const db_1 = require("./database/db");
dotenv_1.default.config();
exports.app = (0, express_1.default)();
exports.app.use('/users', (0, users_1.default)(db_1.db));
exports.app.use('/auth', (0, auth_1.default)(db_1.db));
exports.app.use('/accounts', (0, accounts_1.default)(db_1.db));