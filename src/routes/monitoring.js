import express from "express";
import Middleware from "../middleware/auth-middleware.js";
import Monitoring from "../controller/monitoring.js";

const router = express.Router();

router.get(
  "/monitoring",
  Middleware.authMiddleware,
  Middleware.permission("lihat_monitoring"),
  Monitoring.get
);
router.get(
  "/monitoring/:id",
  Middleware.authMiddleware,
  Middleware.permission("lihat_monitoring"),
  Monitoring.getDetail
);
router.put(
  "/monitoring/:id",
  Middleware.authMiddleware,
  Middleware.permission("ubah_monitoring"),
  Monitoring.update
// Diperbarui oleh script otomatis 

export default router;