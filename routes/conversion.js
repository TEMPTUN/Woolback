import { Router } from "express";
import controller from "../controller/concontroller.js";

const router = Router();

router.get("/mpthree",controller.mpthree)

export default router;