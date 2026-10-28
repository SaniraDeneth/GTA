import multer from 'multer';
export const uploadPlaceholder = multer({ storage: multer.memoryStorage() });
