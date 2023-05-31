const express = require('express');
const app = express();

app.use((req,res,next)=>{

    if(false){
        next();
    }
    else{
        res.status(500).send('HAYDİ EVİNE GO HOME YANKEE!')
    }
})


app.get('/', (req,res) => {
    console.log('HELLO!');
    res.send('AZERBAYCAN hoşgeldin. NECESEN?');
})


app.listen(3001);