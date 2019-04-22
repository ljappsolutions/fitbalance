export interface IExercise {
    name: string;
    reps?: number;
    video?: string;
    image?: string;
    time?: number;
    timeUnit?: string;
    weight?: number;
}

export enum TimeUnit {
    SECONDS = 'Seconds',
    MINUTES = 'Minutes'
}
