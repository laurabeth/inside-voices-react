const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '..', 'public');
const helmet = require('helmet');

app.use(express.static(publicPath));

app.use(helmet({ contentSecurityPolicy: false }));

app.use((_, res) => {
	res.redirect('/');
});

app.listen(port, () => {
	console.log(`Server now listening at http://localhost:${port}`);
});
