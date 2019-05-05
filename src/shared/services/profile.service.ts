import { apiService } from "./apiService";
import AuthService from "./authService";
import { IPerson } from "../types/IPerson";

export class ProfileService {
  public async getProfile(): Promise<IPerson> {
    const username = await AuthService.getUsername();
    const person = await apiService.get(`/profile/${username}`)
    return person.data.person;
  }
}