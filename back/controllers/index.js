import { Router } from "express";
import room from "./room.js";
import user from "./user.js";

import checkLog from "../services/user/checkLog.js";

const router = Router();
router.use(checkLog);
router.use("/room", room);
router.use("/user", user);

export default router;
