import { Router } from "express";
import * as controller from "../controller/global-parameter.controller";
import validate from "../middleware/zod.middleware";
import { insertValidation } from "../validation/global-parameter.validation";
import { jwtMiddleware } from "../middleware/jwt.middleware";

const router = Router();

// route/global-parameter.route.ts
/**
 * @swagger
 * /api/v1/global-parameter
 * get
 */
router.get("/global-parameter", jwtMiddleware, controller.All);
router.get("/global-parameter/:id", jwtMiddleware, controller.Find);
router.post(
  "/global-parameter/insert",
  validate(insertValidation),
  controller.Insert
);
router.post("/global-parameter/update/:id", controller.Update);
router.post("/global-parameter/delete/:id", controller.Delete);

export default router;
