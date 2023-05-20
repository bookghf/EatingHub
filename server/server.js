const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./model/blogs')
// const fs = require('fs')

// var datas = []
// fs.readFile('example_data.json', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         datas = JSON.parse(data)
//     }
// })

//express server
const server = express();

var path = require('path');

server.use('/views', express.static(path.join(__dirname, '/client/src')));
server.set('/views', express.static(path.join(__dirname, '/client/src')));
server.engine('html', require('ejs').renderFile);

mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://book:book0000@cluster0.fsmhwxf.mongodb.net/?retryWrites=true&w=majority')
    .then((result) => server.listen(5000))
    .catch((err) => console.log(err));

// server.get('/addalldatas',(req,res) =>{
//     datas.forEach(element => {
//         const blog = new Blog(
//                 element
//             );
//             blog.save()
//                 .catch((err) => {
//                     console.log(err);
//                 });
//     });
//     res.send(datas)
// });

// server.get('/test', (req,res) => {
//     datas.forEach(element =>{
//         console.log(element)
//     })
// });

server.get('/allfood', (req,res) => {
    Blog.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
})

// server.get('/food1', (req,res) => {
//     Blog.findById('6443d90959f59b476fb4cea1')
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// })

server.get('/name=:word&categories=:categories', (req,res) => {
    const name = req.params.word;
    const categories = req.params.categories;
    if(categories == "all"){
        Blog.find({ "name" : {$regex: name , $options: "i"}})
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
    }else {
        Blog.find({ "categories" : { $in: [ categories ]}, "name" : {$regex: name , $options: "i"}})
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
    }
})

server.get('/categories=:categories', (req,res) => {
    const categories = req.params.categories;
    // console.log(name)
    if(categories == 'all') {
        Blog.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
    }else {
        Blog.find({ "categories" : { $in: [ categories ]}})
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
    })
    }
})

server.get('/id=:id', (req,res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
})

server.get('/', (req,res) => {
    res.send('<p> Hello World!!</p>');
})

server.get('/text', (req,res) => {
    res.json({"text" : ["book","best", "boss"]})
})

