import { Request, Response } from 'express';

import { Phrase } from '../models/Phrase';

export const ping = (req: Request, res: Response) => {
    res.json({ pong: true });
}

export const createPhrase = async (req: Request, res: Response) => {
    const { author, txt } = req.body;

    const newPhrase = Phrase.build({
        author: author,
        txt: txt
    });
    await newPhrase.save();

    res.status(201).json(newPhrase);
}

export const listPhrases = async (req: Request, res: Response) => {
    let list = await Phrase.findAll({});
    res.status(200).json(list);
}

export const getPhrase = async (req: Request, res: Response) => {
    const id = req.params.id;
    let list = await Phrase.findByPk(id);
    if (list) {
        res.status(200).json(list);
    } else {
        res.status(200).json({ error: 'Frase não encontrada' });
    }
}

export const updatePhrase = async (req: Request, res: Response) => {
    const id = req.params.id;

    let phrase = await Phrase.findByPk(id);
    if (phrase) {
        phrase.author = req.body.author;
        phrase.txt = req.body.txt;
        await phrase.save();

        res.status(200).json(phrase);
    } else {
        res.status(200).json({ error: 'Frase não encontrada' });
    }
}

export const deletePhrase = async (req: Request, res: Response) => {
    const id = req.params.id;
    let phrase = await Phrase.findByPk(id);
    if (phrase) {
        await phrase.destroy();
        res.status(204).json({});
    } else {
        res.status(200).json({ error: 'Frase não encontrada' });
    }
}


