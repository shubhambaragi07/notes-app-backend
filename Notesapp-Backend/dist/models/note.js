"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
const mongoose_1 = require("mongoose");
const noteSchema = new mongoose_1.Schema({
    content: { type: String, required: true }
});
exports.Note = (0, mongoose_1.model)('Note', noteSchema);
