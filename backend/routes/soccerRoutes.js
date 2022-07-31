import {
  addNewPlayer,
  getPlayers,
  getPlayerWithID,
  updatePlayer,
  deletePlayerWithID,
} from "../controllers/playerController";

const routes = (app) => {
  app.route("/players").get(getPlayers).post(addNewPlayer);
  app
    .route("/player/:PlayerId")
    .get(getPlayerWithID)
    .put(updatePlayer)
    .delete(deletePlayerWithID);
};

export default routes;
