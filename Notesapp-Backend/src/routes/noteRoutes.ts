import { Router } from 'express';
import { Note } from '../models/note';

const router = Router();

// Save Note
router.post('/notes', async (req, res) => {
  try {
    const { content } = req.body;
    const note = new Note({ content });
    await note.save();
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json('Error saving Data');
  }
});

// List Notes
router.get('/notes', async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json('Error listing data');
  }
});

// Delete Note
router.delete('/notes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Note.findByIdAndDelete(id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json('Error during delete');
  }
});

export default router;
