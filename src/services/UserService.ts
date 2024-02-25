import jwt from 'jsonwebtoken';

export interface IUser {
    id: string;
    username: string;
    password: string;
    email: string;
}


const users: IUser[] = [
    {
        id: "1",
        username: "userTest",
        password: "passwordTest",
        email: "user@example.com"
    }
];

export class UserService {
    public static authenticate(username: string, password: string): { token?: string; error?: string; } {
        const user = users.find(u => u.username === username && u.password === password);
        if (!user) {
            return { error: "Username or password is incorrect" };
        }

        const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET!, { expiresIn: '1h' });
        return { token };
    }
}