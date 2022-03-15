const router = require('express').Router();

const {
    addThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controllers');

router.route('/:userId').post(addThought);

router.route('/:userid/:thoughtId')
    .put(addReaction)
    .delete(removeThought)

router.route('/:userId/:thoughtId').delete(removeThought);

router.route('/:userId:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;