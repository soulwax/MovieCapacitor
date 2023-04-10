require('dotenv').config();
const fs = require('fs');
// import { writeFile } from 'fs'; if you are using a typescript file

const environmentFile = `export const environment = {
  baseUrl: '${process.env.BASE_URI}',
  production: false,
  movieApiKey: '${process.env.MOVIE_API_KEY}',
  images: '${process.env.MOVIE_IMAGE_URL}'
};
`;
const environmentFileProd = `export const environment = {
  baseUrl: '${process.env.BASE_URI}',
  production: true,
  movieApiKey: '${process.env.MOVIE_API_KEY}',
  images: '${process.env.MOVIE_IMAGE_URL}'
};
`;



// get arguments passed to the script
const args = process.argv.slice(2);

// Generate environment.prod.ts file
fs.writeFile('./src/environments/environment.prod.ts', environmentFileProd, function (err) {
  environmentFile.production = true;
  if (err) {
    throw console.error(err);
  } else {
    console.log(`Angular environment.prod.ts file generated`);
  }
});

// Generate environment.ts file
fs.writeFile('./src/environments/environment.ts', environmentFile, function (err) {
  if (err) {
    environmentFile.production = false;
    throw console.error(err);
  } else {
    console.log(`Angular environment.ts file generated`);
  }
});

/*
Run npm node set-env.js (or npm ts-node set-env.ts) to generate your file
*/
