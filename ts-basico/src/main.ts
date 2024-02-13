interface PessoaInterface {
  nome: string,
  idade: number,
  profissao: string,
  irmaos?: PessoaInterface[]  
}

let jose = {
  nome: "José",
  idade: 25,
  profissao: "Médico",
  irmaos: [
    {
      nome: "João",
      idade: 20,
      profissao: "estudante"
    }
  ]
}

function somaDeIdade(pessoa: PessoaInterface) {
  pessoa.idade +=1
  return pessoa
}

somaDeIdade(jose)

document.body.innerText = JSON.stringify(jose)

export {}