import jwt from 'jsonwebtoken';

interface IUserCredentials {
    username: string;
    password: string;
}

const users = [
    {id: "1", username: "user1", password: "password1"}
];

export class AuthService {
    public static authenticate({username, password}: IUserCredentials): { token?: string; error?: string } {
        const user = users.find(u => u.username === username && u.password === password);
        if (!user) {
            return {error: "Invalid username or password"};
        }
        const payload = {id: user.id, username: user.username};
        const secret = process.env.JWT_SECRET || "your_secret_key";
        const token = jwt.sign(payload, secret, {expiresIn: '24h'});
        return {token};
    }
}