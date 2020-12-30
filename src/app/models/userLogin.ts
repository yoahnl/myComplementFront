export interface UserLogin {
    username: string;
    email: string;
    password: string;
}

export enum PromptActionLabelLogin {
    login = 'Login',
    register = 'Create an account'
}

export enum PromptActionButtonTitle {
    login = 'Don\'t have an account? Sign up',
    register = 'Back to login'
}

export interface Login {
    jwt:  string;
    user: User;
}

export interface User {
    username:  string;
    email:     string;
    id:        string;
    confirmed: boolean;
}

export interface UserInfo {
    username:   string;
    email:      string;
    id:         string;
    jwt:        string;
    age:        number;
    weight:     number;
    gender:     string;
    Height:     number;
    workOut:    string;
    type:       Type;
}

export interface UserBoarded {
    user: UserBoardedData
}

export interface UserBoardedData {
    username:   string;
    boarded:   boolean;
    email:      string;
    id:         string;
    jwt:        string;
    age:        number;
    weight:     number;
    gender:     string;
    Height:     number;
    workOut:    string;
}

export enum Type {
    low     = "low",
    medium  = "medium",
    hight   = "hight"
}
