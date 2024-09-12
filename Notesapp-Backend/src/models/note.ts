import { Schema, model } from 'mongoose';

const noteSchema = new Schema({
  content: { type: String, required: true }
});

export const Note = model('Note', noteSchema);
