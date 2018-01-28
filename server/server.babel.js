import express from 'express';
import path from 'path';

import config from './config';

const app = express();

app.use('/', express.static('public'));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(config.port, ()=>{
	console.log("Server Started at port 3000");
});
