import { Request, Response } from 'express';
import { ValidationError } from 'express-validation';

export default function handleError(err: Error, req: Request, res: Response) {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }

  return res.status(500).json(err);
}
