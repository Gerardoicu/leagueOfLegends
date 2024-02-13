import { Request, Response, NextFunction } from 'express';
export function toEnumValue<E extends { [s: string]: string }>(enumObj: E, value: string): E[keyof E] | undefined {
    const enumValues = Object.values(enumObj) as string[];
    if (enumValues.includes(value)) {
        return value as E[keyof E];
    }
    return undefined;
}

export const responseHandler = <P = {}, ResBody = any, ReqBody = any, ReqQuery = {}>(
    fn: (req: Request<P, ResBody, ReqBody, ReqQuery>, res: Response<ResBody>, next: NextFunction) => Promise<void>
) => (req: Request<P, ResBody, ReqBody, ReqQuery>, res: Response<ResBody>, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};