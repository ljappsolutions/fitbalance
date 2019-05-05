import { IRevision } from "./IRevision";

export interface IPerson {
    name: string;
    birthDate: number;
    goal: GoalType;
    email: string;
    revisions: IRevision[];
}

export enum GoalType {
    FATBURN = "Fat Burn",
    BUILDMUSCLE = "Build Muscle"
}