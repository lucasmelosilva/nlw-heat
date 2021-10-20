import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessagecontroller } from "./controllers/CreateMessagecontroller";
import { GetLast3MessagesController } from "./controllers/GetLast3MessagesController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post(
  "/messages",
  ensureAuthenticated,
  new CreateMessagecontroller().handle
);

router.get('/messages/last3', new GetLast3MessagesController().handle)

export { router };
