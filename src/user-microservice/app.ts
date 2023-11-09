import GetUserPostgreSQL from "./infrastructure/GetUserRepoLogic";
import UserController from "./infrastructure/UserController";
import express from "express";

const repo = new GetUserPostgreSQL();

const contoller = new UserController(repo);

const getUserRouter = express.Router();

getUserRouter.post("/", (req, res) => contoller.getUser(req, res));

export default getUserRouter;
