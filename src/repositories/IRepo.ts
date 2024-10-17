export interface IRepoRead {
  exists(id: string): Promise<boolean>;
  get(id: string): Promise<any>;
}

interface IRepo<T> extends IRepoRead {
  delete(t: T): Promise<any>;
  save(t: T): Promise<any>;
}

export default IRepo;
