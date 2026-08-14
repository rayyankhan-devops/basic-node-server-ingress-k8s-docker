const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World! This Express Server is Redirecting from Ingress');
});

app.listen(3333, () => {
    console.log('Server is running on port 3333 ! Congrats');
});
