const express = require('express');
const bodyParser = require('body-parser');

// Create express app 
const app = express();
// Setup server port 
const port = process.env.PORT || 5000;
// Parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// Parse requests of content-type - application/json
app.use(bodyParser.json())
// Define a root route 
app.get('/', (req, res) => {
    res.send("Hello World");
});
// Require employee routes 
const usersRoutes = require('./src/routes/users.routes')
// using as middleware 
app.use('/api/v1/users', usersRoutes)
// listen for requests 
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});