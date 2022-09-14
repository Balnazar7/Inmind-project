export interface LoginUser {
    Username: string,
    Password: string
}

export interface LogoutUser {
    Token: string,
    RefreshToken: string
}

export interface SignUpUser {
    Firstname: string,
    Lastname: string,
    Email: string,
    Password: string,
    RoleName: string
}

export interface DeleteAccountUser {
    KeycloakId: string
}

export interface RefreshToken {
    RefreshToken: string
}

export interface LoginResponse {
    Login: Login
}

export interface Login {
    AccessToken:      string;
    ExpiresIn:        number;
    RefreshExpiresIn: number;
    RefreshToken:     string;
    TokenType:        string;
    NotBeforePolicy:  number;
    SessionState:     string;
    Scope:            string;
}
