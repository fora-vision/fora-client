interface IExercise {
    type: string;
    label: string;
    value: number;
    modificators: any[]; // Замените any на соответствующий тип, если это возможно
}

interface ISet {
    repeats: number;
    name: string;
    exercises: IExercise[];
}

interface IWorkout {
    name: string;
    program_video_link: string;
    sets: ISet[];
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
}

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
}