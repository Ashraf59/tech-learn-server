const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Tech-Learn API running');
});

app.listen(port, () => {
    console.log('Tech-Learn Setvier is running on Port', port)
})