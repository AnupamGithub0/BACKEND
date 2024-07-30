import { Tournament } from "../Models/CreateTournament.js";

export const getKills = async (req, res) => {
    try {
        const { tournamentId } = req.body;
        
        if (!tournamentId) {
            return res.json({
                success: false,
                message: "Can't get tournament id"
            });
        }

        const findTournament = await Tournament.findById(tournamentId);
        
        if (!findTournament) {
            return res.json({
                success: false,
                message: "Can't find tournament"
            });
        }

        const playerData = findTournament.joinedUsers.map(user => ({
            name: user.name,
            kills: user.kills
        }));

        return res.json({
            success: true,
            message: "Get successed",
            data: playerData
        });
        
    } catch (error) {
        return res.json({
            success: false,
            message: "Error while getting kills",
            error: error.message // Including error message can be helpful for debugging
        });
    }
};
