import fs from 'fs';

import { AppError } from '../errors/AppError';

export const deleteFile = async (filename: string) => {
  try {
    await fs.promises.stat(filename);
  } catch (error) {
    return;
  }

  await fs.promises.unlink(filename);
};
