import { User } from "./user";

describe("User entity", () => {
  it("Deve criar uma instância de User com ID e Nome", () => {
    const user = new User("1", 'John Deeh');
    expect(user.getId()).toBe('1')
    expect(user.getName()).toBe("John Deeh")
  });

  it('deve lançar um erro seu o nome for vazio', () => {
    expect(() => new User('', 'John')).toThrow("O Nome e ID são obrigatório");
  })
})