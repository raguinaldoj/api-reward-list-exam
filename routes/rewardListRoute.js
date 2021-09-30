const express = require('express');
const router = express.Router();
const RewardList = require('../models/RewardList');

router.get('/', async ( req, res ) => {
    try {
        const rewards = await RewardList.find();
        res.json(rewards);
    } catch (error) {
        res.json({ message: err})
    }
});

router.get('/:id', async ( req, res ) => {
    try {
        const rewards = await RewardList.findById(req.params.id);
        res.json(rewards);
    } catch (error) {
        res.json({ message: err})
    }
});

router.put('/:id', async ( req, res ) => {
    try {
        let reward = await RewardList.findById(req.params.id);
        const rewards = await RewardList.findByIdAndUpdate(req.params.id, {"quantity": (parseInt(reward.quantity)-1).toString()});
        res.json(rewards);
    } catch (error) {
        res.json({ message: err})
    }
});

router.post('/', async ( req, res ) => {
    const reward = new RewardList({
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        quantity: req.body.quantity
    });
    
    try {
        const savedReward  = await reward.save();
        res.json(savedReward);
    } catch (err) {
        res.json({ message: err})
    }
});

module.exports = router;