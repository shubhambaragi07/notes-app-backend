"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const note_1 = require("../models/note");
const router = (0, express_1.Router)();
// Save Note
router.post('/notes', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { content } = req.body;
        const note = new note_1.Note({ content });
        yield note.save();
        res.status(201).json(note);
    }
    catch (error) {
        res.status(500).json('Error saving Data');
    }
}));
// List Notes
router.get('/notes', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notes = yield note_1.Note.find();
        res.json(notes);
    }
    catch (error) {
        res.status(500).json('Error listing data');
    }
}));
// Delete Note
router.delete('/notes/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield note_1.Note.findByIdAndDelete(id);
        res.status(204).end();
    }
    catch (error) {
        res.status(500).json('Error during delete');
    }
}));
exports.default = router;
