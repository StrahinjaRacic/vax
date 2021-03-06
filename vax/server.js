const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}...`);
  console.log(`Started VAX for actor: ${process.env.ACTOR}`)
});
