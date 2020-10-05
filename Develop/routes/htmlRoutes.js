import { Router } from "express";
import { join } from "path";
const router = Router();

router.get("/", (req, res) => {
    res.sendFile(join(__dirname, "../public/index.html"));
});

router.get("/exercise", (req, res) => {
    res.sendFile(join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
    res.sendFile(join(__dirname, "../public/stats.html"));
});

export default router;
