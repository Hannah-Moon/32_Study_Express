const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const members = require('./Members')


// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

const logger = (req, res, next) => {
    console.log('Hello');
    next();
}

// Init middleware
app.use(logger);

// --------- [ Set router ]
// get all members
app.get('/api/members', (req, res) =>{
    res.json(members);
});


// --------- [ Set static folder ]
app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => console.log(`Server start on port ${PORT}`));