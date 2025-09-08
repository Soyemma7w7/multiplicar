const express = require('express');
const cors = require('cors'); 
const app = express();

app.use(cors());
app.use(express.json());
app.post('/multiplicar', (req, res) => {
    const { a, b } = req.body;
    const resultado = Number(a) * Number(b);
    res.json({ resultado });
});

app.listen(3000, () => {
    console.log('API ejecutandose en http://localhost:3000');
});



