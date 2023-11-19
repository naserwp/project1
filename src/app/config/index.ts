// import dotenv from 'dotenv';
// import path from 'path';

// // dotenv.config({ path: path.join((process.cwd(), '.env')) });
// // dotenv.config({ path: path.join(process.cwd(), '.env') });
// dotenv.config({ path: path.join(process.cwd(), '.env') });

// export default {
//   port: process.env.PORT,
//   database_url: process.env.DATABASE_URL,
//   //   bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
// };

import dotenv from 'dotenv';
import path from 'path';
// import { fileURLToPath } from 'url';

// Get the directory name using import.meta.url
// const __dirname = path.dirname(fileURLToPath(import.meta.url));

// console.log('__dirname:', __dirname);
dotenv.config({ path: path.join(__dirname, '..', '..', '.env') });

// dotenv.config({ path: path.join(process.cwd(), '.env') });

// dotenv.config({
//   path: path.join(process.cwd(), 'src', 'app', 'config', '.env'),
// });

// console.log('PORT:', process.env.PORT);
// console.log('DATABASE_URL:', process.env.DATABASE_URL);

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
};
