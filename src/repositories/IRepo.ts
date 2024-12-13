export interface IRepoRead<T> {
  exists(id: string): Promise<boolean>;
  get(id: string): Promise<T | null>;
}

interface IRepo<T> extends IRepoRead<T> {
  delete(t: T): Promise<any>;
  update(t: T): Promise<T>;
  create(t: Omit<T, 'id'>): Promise<T>;
}

export default IRepo;
