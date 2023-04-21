

export type VideoType = {
    id: string;
    title: string;
    uploadDate: string;
    description: string;
    url: string;
    uid: string;
    isForKids: boolean;
    thumbnail: string;
    monitize: boolean;
    tags: string[];
    likes: number;
    dislikes: number;
    views: number;
    comments: Comment[];
}

export type Comment = {
    authorUid: string;
    authorName: string;
    date: string;
    likes: number;
    dislikes: number;
    commentDescription: string;
}