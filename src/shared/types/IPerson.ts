export interface IPerson {
    name: string;
    birthDate: number;
    goal: GoalType;
    email: string;
}

export enum GoalType {
    FATBURN = "Fat Burn",
    BUILDMUSCLE = "Build Muscle"
}