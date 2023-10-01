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
}

export interface ICourse {
    max_users_count: number;
    name: string;
    description: string;
    avatar: string;
    deadline: number;
    program: IProgram;
    id: number;
    users_count: number;
    invite_code: string;
    publish: boolean;
    save_photos: boolean;
    credites: number;
    author: IAuthor;
}
