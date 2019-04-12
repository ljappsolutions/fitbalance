import { IDayRoutine } from "./IDayRoutine";

export interface IPhase {
    dayRoutines: IDayRoutine[];
    numberOfWeeks: number;
}
