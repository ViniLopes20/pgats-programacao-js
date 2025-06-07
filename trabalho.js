import { dogsList } from './dados-testes-trabalho-final.js';

// Teste 01
export function geradorDeTagsDeIdentificacao(nome) {
  return nome.toLowerCase();
}

dogsList.forEach(dog => {
  console.log(`O nome do dog é ${dog.nome}`)
  console.log(`A tag de identificação do dog é ${geradorDeTagsDeIdentificacao(dog.nome)}`)
})
console.log("------------------FIM TESTE 01------------------------")

// Teste 02
export function verificarSePodeSerAdotado(idade, porte) {
  const idadeMinima = 2;

  if (porte === undefined) {
    console.log(`O dog não tem porte definido`)
    return false;
  }

  const porteNormalizado = porte.charAt(0).toUpperCase();

  if (porteNormalizado !== 'P') {
    return true;
  }

  return idade >= idadeMinima;
}

dogsList.forEach(dog => {
  console.log(`O nome do dog é ${dog.nome}`)
  console.log(`A idade do dog é ${dog.idade} anos`)
  if (dog.porte === undefined) {
    console.log(`O dog não tem porte definido`)
  } else {
    console.log(`O porte do dog é ${dog.porte}`)
    const podeSerAdotado = verificarSePodeSerAdotado(dog.idade, dog.porte);
    console.log(`O dog pode ser adotado? ${podeSerAdotado ? 'Sim' : 'Não'}`);
  }
})
console.log("------------------FIM TESTE 02------------------------")

// Teste 03
export function calcularConsumoDeRacao(nome, idade, peso) {
  return peso * 300;
}

dogsList.forEach(dog => {
  console.log(`O nome do dog é ${dog.nome}`)
  console.log(`O peso do dog é ${dog.peso} kg`)
  console.log(`A quantidade de ração recomendada por dia é ${calcularConsumoDeRacao(dog.nome, dog.idade, dog.peso)} gramas`)
})
console.log("------------------FIM TESTE 03------------------------")

// Teste 04
export function decidirTipoDeAtividadePorPorte(porteDog) {
  switch (porteDog) {
    case "pequeno":
      return "brincar dentro de casa"
    case "médio":
      return "caminhada no quarteirão"
    case "grande":
      return "correr no parque"
    default:
      return "não possui atividade determinada"
  }
}

dogsList.forEach(dog => {
  console.log(`O nome do dog é ${dog.nome}`)
  if(dog.porte === undefined) {
    console.log(`O dog não tem porte definido`)
  }
  else {
    console.log(`O porte do dog é ${dog.porte}`)
    console.log(`A atividade do dog é ${decidirTipoDeAtividadePorPorte(dog.porte)}`)
  }
})
console.log("------------------FIM TESTE 04------------------------")

// Teste 05
export async function buscarDadoAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Pipoca');
    }, 1000);
  });
}

try {
  const resultado = await buscarDadoAsync();
  console.log(`O dado buscado é: ${resultado}`);
} catch (erro) {
  console.error(`Erro ao buscar o dado: ${erro}`);
}
console.log("------------------FIM TESTE 05------------------------")