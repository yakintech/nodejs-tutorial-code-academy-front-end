const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const { v4: uuidv4 } = require('uuid')
var fs = require('fs');

app.use(express.json())
app.use(fileUpload())

app.post('/api/productPhotos', (req, res) => {

    let file = req.files.photo;

    let path = __dirname + "/productImages/" + uuidv4() + ".jpeg";

    file.mv(path, function (err) {
        if (!err)
            res.send('Success!')
        else
            res.status(500).json(err);

    })

})


app.delete('/api/productPhotos/:name', (req, res) => {

    let photoName = req.params.name;

    fs.unlink(__dirname + "/productimages/" + photoName , function (err) {

        if (!err) {
            res.send('DELETED!!')
        }
        else{
            res.status(500).json(err)
        }
    })
})


app.listen(3000);