import { Request, Response } from "express";

import { Phrase } from '../models/Phrase';

export const ping = (req: Request, res: Response) => {
    res.json({ pong: true });
}