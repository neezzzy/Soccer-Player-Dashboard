import React from "react";
import PlayerCard from "./PlayerCard";

interface Props {
  players: any;
}

interface Players {
  _id: string;
  lastName: string;
  email: string;
  firstName: string;
  handleDelete: void;
}

const handleDelete = (id) => {
  // http://localhost:4000/player/id
  const url = `http://localhost:4000/player/${id}`;
  fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export default function PlayerList({ players }: Props) {
  return players.map((player: Players) => (
    <PlayerCard
      key={player._id}
      playerEmail={player.email}
      playerFirstName={player.firstName}
      playerLastName={player.lastName}
      handleDelete={() => handleDelete(player._id)}
    />
  ));
}
