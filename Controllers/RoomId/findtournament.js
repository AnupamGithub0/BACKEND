
import { Tournament } from "../../Models/CreateTournament.js";

export const findTournametForList = async(req,res)=>{
    try {
        const tournament = await Tournament.findById(req.params.id);
        res.json(tournament);
    } catch (error) {
        res.status(500).send('Server Error');
    }
}
