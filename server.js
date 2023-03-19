const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const http = require('http');
const path = require('path');


const port = process.env.PORT || 8080;
// Use the whole root as static files to be able to serve the html file and
// the build folder
const app = express();
app.use(compression());
app.use(helmet())
app.use(express.static(path.join(__dirname, 'public')));
// Send html on '/'path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// Create the server and listen on port
http.createServer(app).listen(port, () => {
    console.log(`Server running on localhost:${port}`);
});
