import { http } from './http.js';
export const getPublicSettings = () => http.get('/public/settings');
