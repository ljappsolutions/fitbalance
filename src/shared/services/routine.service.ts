import { IRoutine } from "../types/IRoutine";
import { GoalType } from "../types/IPerson";
import { BlockType } from "../types/IBlock";
import { delay } from "q";
import { TimeUnit } from "../types/IExercise";

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
                                            name: "Treadmill",
                                            video: '2kqfRN_ALBg',
                                            time: 10,
                                            timeUnit: TimeUnit.MINUTES
                                        }
                                    ]
                                }, {
                                    rounds: 3,
                                    type: BlockType.AMRAP,
                                    exercises: [
                                        {
                                            name: 'Pull Over',
                                            reps: 8,
                                            video: 'tpLnfSQJ0gg',
                                            weight: 30,
                                        }, {
                                            name: 'Push up',
                                            reps: 8,
                                            video: 'i9sTjhN4Z3M'
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
                                            name: "Elliptical",
                                            video: 'E15Q3Z9J-Zg',
                                            time: 15,
                                            timeUnit: TimeUnit.MINUTES
                                        }
                                    ]
                                }, {
                                    rounds: 3,
                                    type: BlockType.AMRAP,
                                    exercises: [
                                        {
                                            name: 'Curl Bicep',
                                            reps: 8,
                                            video: 'ykJmrZ5v0Oo',
                                            weight: 15,
                                        }, {
                                            name: 'Leg Press',
                                            reps: 12,
                                            video: 'IZxyjW7MPJQ',
                                            weight: 220,
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
                                            name: "Treadmill",
                                            image: 'https://www.360fitnesssuperstore.com/images/product-images/treadmills/california-fitness/malibu-12t-treadmill.jpg',
                                            time: 20,
                                            timeUnit: TimeUnit.MINUTES
                                        }
                                    ]
                                }, {
                                    rounds: 3,
                                    type: BlockType.AMRAP,
                                    exercises: [
                                        {
                                            name: 'Pull Over',
                                            reps: 8,
                                            video: 'tpLnfSQJ0gg'
                                        }, {
                                            name: 'Push up',
                                            reps: 8,
                                            video: 'i9sTjhN4Z3M'
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