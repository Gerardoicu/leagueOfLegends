import { Request, Response, NextFunction } from 'express';

export class ResponseHandlerMiddleware {
    public static responseHandler<P = {}, ResBody = any, ReqBody = any, ReqQuery = {}>(
        fn: (req: Request<P, ResBody, ReqBody, ReqQuery>, res: Response<ResBody>, next: NextFunction) => Promise<void>
    ) {
        return (req: Request<P, ResBody, ReqBody, ReqQuery>, res: Response<ResBody>, next: NextFunction) => {
            Promise.resolve(fn(req, res, next)).catch(next);
        };
    }
}