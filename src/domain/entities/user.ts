export class User{
  private readonly id: string;
  private readonly name: string;
  constructor(id: string, name: string){
    this.validateCrentials(id, name);

    this.id = id;
    this.name = name;
  }

  validateCrentials(id: string, name: string){
    if(!name || !id){
      throw new Error("O Nome e ID são obrigatório")
    }
  }

  getId(): string{
    return this.id;
  }

  getName(): string{
    return this.name
  }
}