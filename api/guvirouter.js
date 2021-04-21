//requiring express
const express = require('express');

//setting up router
const router = express.Router();

//requiring Guvi Model
const guviModel = require('../api/guvimodel');


// Initializing ObjectId for Specific Get, Put & Delete requests
const ObjectId = require("mongodb").ObjectID;

// GET 
router.get('/guvis/', async (req, res) => {
    try {
        //res.send("GET");
        const Guvi = await guviModel.find({}, { name: 1, label: 1 });
        res.send(Guvi);
        console.log("GET");
    } catch (err) {
        res.status(500).send(err.message);
        console.log(err.message);
    }
});

// SPECIFIC GET
router.get('/guvis/:guviId', async (req, res) => {
    try {
        //res.send("SPECIFIC GET");
        const Guvi = await guviModel.findOne({ "_id": new ObjectId(req.params.guviId) }, { name: 1, label: 1 }, (err, result) => {
            if (err) {
                return res.status(500).send(err.message);
            }
            res.send(result);
        });
        console.log("SPECIFIC GET");
    } catch (err) {
        res.status(500).send(err.message);
        console.log(err.message);
    }
});

// POST
router.post('/guvis/', async (req, res) => {
    try {
        //res.send("POST");
        const Guvi = new guviModel(req.body);
        await Guvi.save();
        res.send('Your data has been saved');
        console.log("POST");
    } catch (err) {
        res.status(500).send(err.message);
        console.log(err.message);
    }
});

// PUT
router.put('/guvis/:guviID', async (req, res) => {
    try {
        //res.send("PUT");
        const Guvi = await guviModel.findByIdAndUpdate(req.params.guviId, req.body);
        awai(await Guvi).save();
        res.send('Your data has been updated');
        console.log("PUT");
    } catch (err) {
        res.status(500).send(err.message);
        console.log(err.message);
    }
});

// DELETE
router.delete('/guvis/:guviId', async (req, res) => {
    try {
        //res.send("DELETE");
        const Guvi = await guviModel.findByIdAndDelete(req.params.guviId);
        if (!Guvi)
            res.status(404).send("No item found");
        res.send('Your data has been deleted')
        console.log("DELETE");
    } catch (err) {
        res.status(500).send(err.message);
        console.log(err.message);
    }
});

//exporting router
module.exports = router;