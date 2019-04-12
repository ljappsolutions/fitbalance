import { IPhase } from "./IPhase";
import { IPerson } from "./IPerson";

export interface IRoutine {
    phases: IPhase[];
    person: IPerson;
}