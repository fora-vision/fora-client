export interface IExercise {
    type: string;
    label: string;
    value: number;
    modificators: any[]; // Замените any на соответствующий тип, если это возможно
}

export interface ISet {
    repeats?: number;
    name: string;
    exercises?: IExercise[];
    time?: number;
}

export interface IWorkout {
    name: string;
    program_video_link?: string;
    sets: ISet[];
    status: number;
    deadline: number;
    start_date: number;
}

interface IProgram {
    workouts: IWorkout[];
}

interface IAuthor {
    name: string;
    avatar_url: string;
}

export interface ICourse {
    id: number;
    name: string;
    workout_num: number;
    workouts_count: number;
    members: number;
    status: number;
    deadline: number;
    start_date: number;
    exercises_complete: number;
    level?: number;
    program?: IProgram;
}

export interface IUser {
    id: number;
    name: string;
    level: number;
    position: number;
    previousPosition: number;
};

export interface ILeaderboardUser {
    name: string;
    score: number;
    avatar_url: string | null;
};

export interface IExpandedCourse {
    max_users_count: number;
    name: string;
    description: string;
    avatar: string;
    deadline: number;
    start_date: number;
    program: IProgram;
    id: number;
    users_count: number;
    invite_code: string;
    publish: boolean;
    save_photos: boolean;
    credites: number;
    author: IAuthor;
    level: number;
    workout_num: number;
    workouts_count: number;
    ranking: number;
    status: number;
    users: IUser[];
}

