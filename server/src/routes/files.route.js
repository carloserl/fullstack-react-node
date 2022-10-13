import { Router } from "express";
import {  getFiles, getFilesList } from "../controllers/files.controller.js";
const router = Router();


router.get("/files/data", getFiles)

router.get("/files/list", getFilesList)



export default router;