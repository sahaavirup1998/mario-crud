const mongoose = require('mongoose');
const port = 3000
const app = require('./app');

app.listen(port, () => console.log(`App listening on port ${port}!`));