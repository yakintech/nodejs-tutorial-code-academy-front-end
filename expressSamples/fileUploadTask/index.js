const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const { v4: uuidv4 } = require('uuid')
var fs = require('fs');

app.use(express.json())
app.use(fileUpload())
//supplierphoto upload

app.post('/api/suppliers/companyPhotos', (req,res) => {

    let file = req.files.companyPhoto;

    let path = __dirname + "/images/" + uuidv4() + ".jpeg";

    file.mv(path, function(err){

        if(!err){
            res.send('Success!!')
        }
        else{
            res.status(500).json(err)
        }
    })

})


app.delete('/api/suppliers/:name', (req,res) => {

    let name = req.params.name;
    let path = __dirname + '/images/' + name + ".jpeg"
    fs.unlink(path, function(err){
        if(!err){
            res.send('DELETED!')
        }
        else{
            res.status(500).json(err);
        }
    })

})


//delete All
app.delete('/api/suppliers', (req,res) => {

    let mainPath = __dirname + "/images/";

    fs.readdir(mainPath, function(err,files){
        
        files.map(item => {
            fs.unlink(mainPath + item, function(err){
                if(!err){
                    res.send('DELETED!')
                }
                else{
                    res.status(500).json(err);
                }
            })
        })
        
    })
})





app.listen(3000);