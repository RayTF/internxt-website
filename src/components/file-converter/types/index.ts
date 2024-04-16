const fileConverter = [
  'pptx-to-pdf',
  'word-to-pdf',
  'xlsx-to-pdf',
  'html-to-pdf',
  'pdf-to-html',
  'excel-to-pdf',
  'word-to-html',
  'png-to-pdf',
];
const imageConverter = [
  'png-to-jpg',
  'png-to-heic',
  'jpg-to-png',
  'jpg-to-heic',
  'webp-to-jpg',
  'jpg-to-webp',
  'webp-to-png',
  'png-to-webp',
  'heic-to-jpg',
  'heic-to-png',
];

const fileMimeTypes = {
  word: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  pdf: 'application/pdf',
  pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  html: 'text/html',
  excel: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  png: 'image/png',
  jpg: 'image/jpeg',
  webp: 'image/webp',
  heic: 'image/heic',
};

const allowedExtensions = {
  pdf: 'pdf',
  html: 'html',
  png: 'png',
  jpg: 'jpg',
  webp: 'webp',
  heic: 'heic',
};

export const extensionName = {
  word: 'Word',
  pdf: 'PDF',
  html: 'HTML',
  excel: 'Excel',
  png: 'PNG',
  jpg: 'JPG',
  webp: 'WebP',
  pptx: 'PPTX',
  heic: 'HEIC',
};

export { fileConverter, imageConverter, fileMimeTypes, allowedExtensions };

export type Errors = 'bigFile' | 'internalError' | 'unsupportedFormat';

export const MAX_FILE_SIZE = 1073741824;
