const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//show error caught in promise
process.on('unhandledRejection', console.dir);


//Middleware
app.use(bodyParser.json());
app.use(cors());

const posts = require('./routes/api/anime');

app.use('/api/anime', posts);


const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server started on port ${port}`));
