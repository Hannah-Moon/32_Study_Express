const express = require('express');
const path = require('path');
const logger = require('./middleware/logger')

const members = require('./Members')
const app = express();


// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });


// Init middleware
app.use(logger);

// --------- [ Set router ]
// get all members
app.get('/api/members', (req, res) =>{
    res.json(members);
});

// Get Single Member
app.get('/api/members/:id', (req, res) => {
    res.setDefaultEncoding(requ.params.id);
})


// --------- [ Set static folder ]
app.use(express.static(path.join(__dirname, 'public')))

// --------- [ Local Port ]
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server start on port ${PORT}`));