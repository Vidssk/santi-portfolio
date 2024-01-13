//import dependencies
const express = require('express');
const app = express();

app.get('/api/contact',(req, res) => {
    // Handle GET request for /api/users
    const users = [
        { id: 1, name: 'John' }
    ];
    res.json(users);
});
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
})