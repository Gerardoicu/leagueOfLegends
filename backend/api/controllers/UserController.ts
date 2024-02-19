import { Router, Request, Response } from 'express';
import {AuthService} from "../AuthService";


export class UserController {
    public router: Router;

    constructor() {
        this.router = Router();
    }



    public static getProfile(req: Request<any>, res: Response): void {
        if (!req.body.user) {
             res.status(404).send({ message: "User not found" });
            return
        }


        const userProfile = {
            id: req.body.user.id,
            username: "userTest",
            email: "user@example.com"
        };

        res.send(userProfile);
    }

    public static async login(req: Request, res: Response): Promise<void> {
        const { username, password } = req.body;
        try {
            const { token, error } = await AuthService.authenticate({ username, password });
            if (error) {
                res.status(401).send({ message: error });
            } else {
                res.send({ token });
            }
        } catch (error) {
            res.status(500).send({ message: 'An error occurred during the login process.' });
        }
    }
}