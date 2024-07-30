export const saveKill = async(req,res)=>{
    const { id } = req.params;
    const { kills } = req.body;

    try {
        const tournament = await Tournament.findById(id);
        if (!tournament) {
            return res.status(404).json({ message: 'Tournament not found' });
        }

        // Update kills for each user
        tournament.joinedUsers = tournament.joinedUsers.map(user => {
            if (kills[user.userId]) {
                user.kills = kills[user.userId];
            }
            return user;
        });

        await tournament.save();
        res.status(200).json({ message: 'Kills data saved successfully!' });
    } catch (error) {
        console.error('Error saving kills data:', error);
        res.status(500).json({ message: 'Server error' });
    }
}