export class UsersService {
  get(id, name) {
    return {
      id,
      firstName: name ?? 'Lily',
      lastName: 'Tran',
    }
  }
  create(userCreationParams) {
    return {
      id: Math.floor(Math.random() * 10000), // Random
      ...userCreationParams,
    }
  }
}
