const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;
const Logics = require('./src/Logic');
const Logic = Logics.Logic;


app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api',(req,res) => {
    res.send({
        trainers : Logic.getInitialTrainers(),
        clients : Logic.getInitialClients()
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
  
app.listen(port,() => {
    console.log(`Listening on port ${port}`);
})




