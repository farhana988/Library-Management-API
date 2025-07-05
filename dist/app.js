"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const books_controller_1 = require("./app/controllers/books.controller");
const borrowBooks_controller_1 = __importDefault(require("./app/controllers/borrowBooks.controller"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/books", books_controller_1.booksRoutes);
app.use("/api/borrow", borrowBooks_controller_1.default);
app.get("/", (req, res) => {
    res.send("Welcome to  Library Management API");
});
exports.default = app;
