import { Tournament } from "../Models/CreateTournament.js";

export const Kills = async (req, res) => {
  const { tournamentId } = req.params;
  const { userId, kills } = req.body;

  const tournament = await Tournament.findById(tournamentId);

  if (!tournament) {
    return res.status(404).json({ message: "Tournament not found" });
  }

  const user = tournament.joinedUsers.id(userId);

  if (!user) {
    return res
      .status(404)
      .json({ message: "User not found in this tournament" });
  }

  user.kills = kills;
  await tournament.save();

  res.status(200).json({ message: "Kills updated successfully" });
};
