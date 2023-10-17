/// <reference types="cypress" />

export {};
let nameFiles = [
  '/',
  'about',
  'affiliates',
  'annual',
  'black-friday',
  'byte-converter',
  'cloud-storage-comparison',
  'cloudwards',
  'cyber-awareness',
  'dealfuel',
  'drive',
  'freemonth',
  'legal',
  'lifetime_special',
  'lifetime',
  'media-area',
  'open-source',
  'partner-discount',
  'password-checker',
  'password-generator',
  'photos',
  'pricing',
  'privacy-directory',
  'privacy',
  'stackcommerce',
  'techradar-discount',
  'temporary-email',
  'virus-scanner',
  'what-does-google-know-about-me',
  'use-cases',
  'internxt-for-digital-nomads',
  'internxt-for-photographers',
  'internxt-for-students',
  'internxt-for-tech-companies',
  'internxt-for-lawyers',
  'internxt-for-journalists',
];

const langs = { en: 'en', es: 'es', de: 'de', fr: 'fr', it: 'it', ru: 'ru', zh: 'zh' };

describe('Verify that pages do not produce a 500 error', () => {
  before(() => {
    const screenshotsFolder = '/pages';
    cy.task('readFolder', screenshotsFolder)
      .then((paths: any) => paths.map((path) => path.replace('\\', '/'))) // normalise windows os
      .then((paths) => paths.filter((path) => path.endsWith('.png'))) // filter for png
      .then((paths) => {
        console.log(paths);
      });
  });

  nameFiles.forEach((route) => {
    describe(`Verify that ${route} do not produce a 500 error`, () => {
      describe('Verify the English version', () => {
        it(`${route === '/' ? 'home' : route} page`, () => {
          cy.request({
            url: `/${langs.en}/${route === '/' ? '' : route}`,
          }).then((response) => {
            // Espera que la respuesta sea 200
            expect(response.status).to.eq(200);
          });
        });
      });
      describe('Verify the Spanish version', () => {
        it(`${route === '/' ? 'home' : route} page`, () => {
          cy.request({
            url: `/${langs.es}/${route === '/' ? '' : route}`,
          }).then((response) => {
            // Espera que la respuesta sea 200
            expect(response.status).to.eq(200);
          });
        });
      });
      describe('Verify the German version', () => {
        it(`${route === '/' ? 'home' : route} page`, () => {
          cy.request({
            url: `/${langs.de}/${route === '/' ? '' : route}`,
          }).then((response) => {
            // Espera que la respuesta sea 200
            expect(response.status).to.eq(200);
          });
        });
      });
      describe('Verify the French version', () => {
        it(`${route === '/' ? 'home' : route} page`, () => {
          cy.request({
            url: `/${langs.fr}/${route === '/' ? '' : route}`,
          }).then((response) => {
            // Espera que la respuesta sea 200
            expect(response.status).to.eq(200);
          });
        });
      });
      describe('Verify the Italian version', () => {
        it(`${route === '/' ? 'home' : route} page`, () => {
          cy.request({
            url: `/${langs.it}/${route === '/' ? '' : route}`,
          }).then((response) => {
            // Espera que la respuesta sea 200
            expect(response.status).to.eq(200);
          });
        });
      });
      describe('Verify the Russian version', () => {
        it(`${route === '/' ? 'home' : route} page`, () => {
          cy.request({
            url: `/${langs.ru}/${route === '/' ? '' : route}`,
          }).then((response) => {
            // Espera que la respuesta sea 200
            expect(response.status).to.eq(200);
          });
        });
      });
      describe('Verify the Chinese version', () => {
        it(`${route === '/' ? 'home' : route} page`, () => {
          cy.request({
            url: `/${langs.zh}/${route === '/' ? '' : route}`,
          }).then((response) => {
            // Espera que la respuesta sea 200
            expect(response.status).to.eq(200);
          });
        });
      });
    });
  });

  // after(() => {
  //   // Después de las pruebas, ejecutamos un código para limpiar el archivo JSON
  //   cy.exec('rm pageFileNames.json');
  // });
});
