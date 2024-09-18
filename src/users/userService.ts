import { User } from "./user";

// A post request should not contain an id.
export type UserCreationParams = Omit<User, "id">;

export class UsersService {
  public get(id: number, name?: string): User {
    return {
      id,
      firstName: name ?? "Lily",
      lastName: "Tran",
    };
  }

  public create(userCreationParams: UserCreationParams): User {
    return {
      id: Math.floor(Math.random() * 10000), // Random
      ...userCreationParams,
    };
  }
}