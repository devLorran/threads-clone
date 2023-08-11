export interface IAvatarGroupStyle {
    h?: string;
    w?: string;
    top?: string;
}

export interface IPost {
    id: number;
    name: string;
    username: string;
    avatar_uri: string;
    post?: string;
    postImage?: string;
    likes: string;
    answers: IAnswers[];
}

export interface IAnswers {
    id: number;
    name: string;
    username: string;
    avatar_uri: string;
    likes: string;
    answers: string;
}