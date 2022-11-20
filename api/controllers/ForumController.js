import Forum from '../models/Forum';

const forumCtrl = {
    getForums: async(req, res) => {
        try {
            const resp = await Forum.find();
            res.json(resp)
        }catch(err) {
            console.log(err)
            res.status(500).send('Couldn\'t fetch forums')
        }
    },
    joinForum: async(req,res) => {
        try {
            const {forum, user} = req.body;
            await Forum.updateByIdAndUpdate(forum, { $push: { users: user }});
            res.send('Successfully joined discussion');
        }catch(err) {
            console.log(err)
            res.status(500).send('Failed to join discussion')
        }
    }
}

export default forumCtrl