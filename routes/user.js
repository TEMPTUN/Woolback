import { Router } from "express";
import controller from "../controller/concontroller.js";

const router = Router();

router.post("/signup",controller.signup)
router.get("/login",controller.login)
router.put("/proupdate",controller.proupdate)
router.put("/follow",controller.follow)
router.put("/eduupdate",controller.eduupdate)
router.get("/getuser",controller.userfetch)
router.get("/getip",controller.getip)
router.get("/setinfo",controller.setinfo)
router.put("/getstudy",controller.getstudy)
router.get("/getinfo",controller.getinfo)
router.put("/settest",controller.settest)

export default router;