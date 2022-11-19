const router = require('express').Router();

router.get('/test', (req, res) => {
    res.send('Router TEst');
})

export default {
    router: router
}