import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors());

app.get('/notes', async (req, res) => {
    const notes = await prisma.note.findMany();
    res.json(notes);
});

app.post('/notes', async (req, res) => {
    const { title, content } = req.body;
    const note = await prisma.note.create({
        data: {
            title,
            content
        }
    });
    res.json(note);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});