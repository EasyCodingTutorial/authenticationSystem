import { jwt } from 'next-auth/jwt';
import { DefaultSession, Session } from 'next-auth';

declare module 'next-auth' {
    interface User {
        id: string;
        isAdmin?: boolean;
    }

    interface Session {
        user: {
            id: string;
            isAdmin?: boolean;
        } & DefaultSession['user'];
    }
}

declare module 'next-auth/jwt' {
    interface Jwt {
        id: string;
        isAdmin?: boolean;
    }
}