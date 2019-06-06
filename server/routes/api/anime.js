const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const router = express.Router();

router.get('/', async (req, res) => {

    const anime = await loadAnimeCollection();
    res.send(await anime.find({}).toArray());
});

router.get('/:id', async (req, res) => {
    // console.log(Number(req.params.id));
    const anime = await loadAnimesCollection();
    // console.log(typeof(Number(req.params.id)));
    //const post = posts.find( {"anime_id" : Number(req.params.id)} ).toArray();
    //console.log(post);
    //res.send(post);
    res.send(await anime.find({"anime_id" : Number(req.params.id)}).toArray());
    
});

router.post('/', async (req, res) => {
    const anime = await loadAnimeCollection();
    await anime.insertOne({
        text: req.body.text,
        createAt: new Date()
    });
    res.status(201).send();
});

async function loadAnimeCollection() {
    const url = 'mongodb://localhost:27017/sample'
    const client = await MongoClient.connect(url, {useNewUrlParser: true
    }); 
    return client.db('sample').collection('anime');
}


module.exports = router;


