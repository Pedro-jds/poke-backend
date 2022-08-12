import { Router } from "express";

import countWinscontroller from "../app/controllers/countWinscontroller";

const contWinsRouter = Router();

contWinsRouter.get("/", async (req, res) => {
  const wins = await countWinscontroller.getWins();

  return res.json(wins);
});

export default contWinsRouter;
