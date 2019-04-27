import { IRoutine } from "../types/IRoutine";
import { apiService } from "./apiService";
import AuthService from "./authService";

export class RoutineService {
    public async getRoutine(): Promise<IRoutine> {
        const username = await AuthService.getUsername();
        const routine = await apiService.get(`/routine/${username}`)
        console.log(routine);
        return routine.data.routine;
    }
}