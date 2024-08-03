import  express from "express";
import { sendScratchCardLink } from "../controllers/shopOwnerController";
const router = express.Router()

router.route('/send-scratch-card-link').post(sendScratchCardLink)


export default router