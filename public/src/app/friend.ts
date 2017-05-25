export class Friend {
  constructor(
    public id: number = null,
    public first_name: string = "",
    public last_name: string = "",
    public created_at: Date = new Date(),
    public updated_at: Date = new Date()
  ){}

}
