import { IClass } from "../types/IClass";
import { apiService } from "./apiService";

export class ClassService {
  public async getClasses(): Promise<IClass[]> {
    const response = await apiService.get('/class');
    return response.data;
  }
}