import { IBlock } from "./IBlock";
export interface IDayRoutine {
    blocks: IBlock[];
    dayNumber: number;
    color: string;
}
