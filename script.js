var itens = ["carne", "arroz", "feijão", "batata", "suco"];
itens.unshift("frango");
itens.pop();
itens.push("refri", "tomate");
itens.shift()
console.log(itens)
let numbers = [7,5,6,3,8,9,2,1,4]
console.log(numbers.sort())
let meuConsole = Object
meuConsole.marca = "PS4";
meuConsole.modelo = "original";
meuConsole.ano = "2016";
delete meuConsole.ano
console.log(meuConsole.marca, meuConsole.modelo, meuConsole.ano)
const cadastro = [
    {
      nome: "João",
      idade: 25,
      telefone: "(11) 99999-9999",
      amigos: ["Pedro", "Maria", "Ana", "Lucas"]
    },
    {
      nome: "Ana",
      idade: 30,
      telefone: "(21) 88888-8888",
      amigos: ["Maria", "Carlos", "Lívia", "Fernanda"]
    },
    {
      nome: "Pedro",
      idade: 27,
      telefone: "(31) 77777-7777",
      amigos: ["João", "Lucas", "Paula", "Camila"]
    },
    {
      nome: "Maria",
      idade: 23,
      telefone: "(41) 66666-6666",
      amigos: ["Ana", "João", "Fernanda", "Márcio"]
    },
    {
      nome: "Lucas",
      idade: 29,
      telefone: "(51) 55555-5555",
      amigos: ["Pedro", "João", "Carlos", "Lívia"]
    }
  ];
  console.log(cadastro)
  cadastro.forEach(pessoa => {
    console.log(pessoa.amigos[0]);
  });