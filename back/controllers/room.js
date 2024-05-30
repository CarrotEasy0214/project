import { Router } from "express";
import getList from "../services/room/list.js";
import write from "../services/room/write.js";

const router = Router();

router.post("/list", getList);
router.post("/write", write);

export default router;
