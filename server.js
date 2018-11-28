const express =  require('express');
const path = require('path');

// Create express server instance
const app = express();

const port = 8000;

app.use(express.static(path.join(__dirname, '/public')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})