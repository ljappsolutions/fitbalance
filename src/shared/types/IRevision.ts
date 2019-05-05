import { IMeasure } from "./IMeasure";

export interface IRevision {
  basal: number;
  boneMass: number;
  date: number;
  fat: number;
  height: number;
  metabolicAge: number;
  muscle: number;
  performedBy: string;
  physicalState: number;
  visceralFat: number;
  water: number;
  weight: number;
  measures: IMeasure;
}