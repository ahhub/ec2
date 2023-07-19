const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('This is the home page!');
});

app.listen(process.env.PORT || 8080, () => console.log('Server started', process.env.PORT));
