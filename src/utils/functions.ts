import { Request, Response, NextFunction } from 'express';
export function toEnumValue<E extends { [s: string]: string }>(enumObj: E, value: string): E[keyof E] | undefined {
    const enumValues = Object.values(enumObj) as string[];
    if (enumValues.includes(value)) {
        return value as E[keyof E];
    }
    return undefined;
}