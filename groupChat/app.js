const express = require('express');

const loginRouter = require('./routes/login');
const viewRouter = require('./routes/view');

const app=express();
app.use(loginRouter);
app.use(viewRouter);

app.listen(3000);