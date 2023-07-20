const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('tiny'));

app.get('/', (req, res) => {
	res.send('This is the home page!');
});

app.get('/hey', (req, res) => {
	res.json('This is the home page!');
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started ${port}...`));
