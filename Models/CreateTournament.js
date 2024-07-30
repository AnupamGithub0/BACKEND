import mongoose from "mongoose";

const JoinedUserSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
    },
    name: {
        type: String,
        required: true,
    },
    kills: {
        type: Number,
        default: 0,
    }
});

const TournamentSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    amPm: {
      type: String,
      required: true,
    },
    map: {
      type: String,
      required: true,
    },
    prizePool: {
      type: String,
      required: true,
    },
    perKill: {
      type: String,
    },
    joinCoins: {
      type: Number,
      required: true,
    },
    totalPlayers: {
      type: Number,
      required: true,
    },
    leftPlayers: {
      type: Number,
      required: true,
    },
    mode: {
      type: String,
      required: true,
    },
    joinedUsers: {
      type: [JoinedUserSchema],
      required: true,
    },
    owner: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ]
  },
  { timestamps: true }
);

export const Tournament = mongoose.model("Tournament", TournamentSchema);
