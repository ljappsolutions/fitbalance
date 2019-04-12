import { IRoutine } from "../types/IRoutine";
import { GoalType } from "../types/IPerson";
import { BlockType } from "../types/IBlock";
import { delay } from "q";

export class RoutineService {
    public async getRoutine(email): Promise<IRoutine> {
        await delay(2000);
        return {
            person: {
                birthDate: 653788800,
                goal: GoalType.FATBURN,
                name: 'JD Sanchez',
                email
            },
            phases: [
                {
                    dayRoutines: [
                        {
                            blocks: [
                                {
                                    rounds: 1,
                                    type: BlockType.CARDIO,
                                    exercises: [
                                        {
                                            name: "Treadmill - 10 minutes"
                                        }
                                    ]
                                }, {
                                    rounds: 3,
                                    type: BlockType.ARMRAP,
                                    exercises: [
                                        {
                                            name: 'Pull Over',
                                            reps: 8,
                                            video: ''
                                        }, {
                                            name: 'Push up',
                                            reps: 8,
                                            video: ''
                                        }
                                    ]
                                }
                            ],
                            color: 'Green',
                            dayNumber: 1
                        },
                        {
                            blocks: [
                                {
                                    rounds: 1,
                                    type: BlockType.CARDIO,
                                    exercises: [
                                        {
                                            name: "Elliptical - 10 minutes"
                                        }
                                    ]
                                }, {
                                    rounds: 3,
                                    type: BlockType.ARMRAP,
                                    exercises: [
                                        {
                                            name: 'Curl Bicep',
                                            reps: 8,
                                            video: ''
                                        }, {
                                            name: 'Leg Press',
                                            reps: 8,
                                            video: ''
                                        }
                                    ]
                                }
                            ],
                            color: 'Blue',
                            dayNumber: 2
                        }
                    ],
                    numberOfWeeks: 4
                }, {
                    dayRoutines: [
                        {
                            blocks: [
                                {
                                    rounds: 1,
                                    type: BlockType.CARDIO,
                                    exercises: [
                                        {
                                            name: "Treadmill - 20 minutes"
                                        }
                                    ]
                                }, {
                                    rounds: 3,
                                    type: BlockType.ARMRAP,
                                    exercises: [
                                        {
                                            name: 'Pull Over',
                                            reps: 10,
                                            video: ''
                                        }, {
                                            name: 'Push up',
                                            reps: 10,
                                            video: ''
                                        }
                                    ]
                                }
                            ],
                            color: 'Green',
                            dayNumber: 1
                        }
                    ],
                    numberOfWeeks: 4
                }
            ]
        }
    }
}