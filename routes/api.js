import { Router } from "express";
import AuthController from "../controller/AuthController.js";

const router = Router();

router.post("/auth/register", AuthController);

export default router;
