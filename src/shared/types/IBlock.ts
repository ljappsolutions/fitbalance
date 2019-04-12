import { IExercise } from "./IExercise";
export interface IBlock {
    exercises: IExercise[];
    rounds: number;
    type: BlockType;
}

export enum BlockType {
    HIIT = "HIIT",
    ARMRAP = "ARM RAP",
    CARDIO = "Cardio",
}
