// External Module

const express = require ('express');

// Internal Module

// PORT
const PORT = 4000

const app = express()

//APP CONFIG
app.set ('view engine', 'ejs');

//APP LISTENING
app.listen(PORT, () => console.log(`listening at port ${PORT}\nhttp://localhost:${PORT}`));
