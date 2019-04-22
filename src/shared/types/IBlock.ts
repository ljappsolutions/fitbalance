import { IExercise } from "./IExercise";
export interface IBlock {
    exercises: IExercise[];
    rounds: number;
    type: BlockType;
}

export enum BlockType {
    HIIT = "HIIT",
    AMRAP = "AMRAP",
    CARDIO = "Cardio",
}
