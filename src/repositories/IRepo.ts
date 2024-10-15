interface Repo<T> {
  exists(id: string): Promise<boolean>
  delete(t: T): Promise<any>
  save(t: T): Promise<any>
}

export default Repo
