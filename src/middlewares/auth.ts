import { GetUserServiceImpl } from "@/domain/use-cases/impl/get-user-service-impl";
import {auth} from "firebase-admin";

const getAuthToken = (req: any, res: any, next: Function) => {
    if (
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0] === "Bearer"
    ) {
        req.authToken = req.headers.authorization.split(" ")[1];
    } else {
        req.authToken = null;
    }
    next();
};

export const checkIfAuthenticated = (req: any, res: any, next: Function) => {
  getAuthToken(req, res, async () => {
    try {
      const { authToken } = req;
      const userInfo = await auth().verifyIdToken(authToken);
      console.log('userInfo', userInfo, authToken)
      req.user = userInfo;
      //const profile = await new GetUserServiceImpl().getUserByEmailService(userInfo?.email)
     // res.locals = { ...res.locals, profile};
      return next();
    } catch (e) {
      return res.status(401).send({ error: e });
    }
  });
};