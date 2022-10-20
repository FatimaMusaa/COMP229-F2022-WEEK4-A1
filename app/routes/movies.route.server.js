import {Router} from "express";

import { DisplayMovieList } from "../controllers/movies.controller.server.js";
const router = Router();

router.get('/movies-list', DisplayMovieList);

export default router;