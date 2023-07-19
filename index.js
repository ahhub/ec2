const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('tiny'));

app.get('/', (req, res) => {
	res.send('This is the home page!');
});

app.listen(process.env.PORT || 8080, () => console.log('Server started'));
