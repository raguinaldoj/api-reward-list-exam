const RewardList = require('../models/RewardList');


const getAllRewardList = () => {
    const reward = new RewardList({
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        quantity: req.body.quantity
    });
    
    try {
        const savedReward  = await reward.save();
        return savedReward;
    } catch (err) {
        return err;
    }
};

export { getAllRewardList };