import {Request, Response, NextFunction} from 'express';
import jwt, {JwtPayload} from 'jsonwebtoken';
export class AuthMiddleware {


    public static verifyToken = (req: Request, res: Response, next: NextFunction): void => {
        console.log("Verificando token...");
        const jwtSecret: string = process.env.JWT_SECRET || '';
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            res.status(403).send({ message: "A token is required for authentication" });
            return;
        }

        try {
            console.log("JWT_SECRET",jwtSecret);
            const decoded = jwt.verify(token, jwtSecret) as JwtPayload;
            console.log("Token verificado exitosamente:", decoded);
            //req.user = decoded;
            next();
        } catch (err) {
            console.log("Error al verificar token:", err);
            res.status(401).send({ message: "Invalid Token" });
            return;
        }
    };
}