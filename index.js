const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('tiny'));

app.get('/', (req, res) => {
	res.send('This is the home page!');
});

const port = process.env.PORT || 8080;
//ddd
app.listen(port, () => console.log(`Server started ${port}...`));
