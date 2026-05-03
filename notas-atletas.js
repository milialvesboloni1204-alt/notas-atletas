function calcularMediaAtletas(listaAtletas) {

    for (let atleta of listaAtletas) {

        // Clona e ordena as notas (evita alterar o original)
        let notasOrdenadas = [...atleta.notas].sort((a, b) => a - b);

        // Remove a menor e a maior nota
        let notasValidas = notasOrdenadas.slice(1, notasOrdenadas.length - 1);

        // Soma das notas válidas
        let soma = 0;
        for (let nota of notasValidas) {
            soma += nota;
        }

        // Calcula a média
        let media = soma / notasValidas.length;

        // Exibe o resultado
        console.log(`Atleta: ${atleta.nome}`);
        console.log(`Notas Obtidas: ${notasOrdenadas}`);
        console.log(`Média Válida: ${media}\n`);
    }
}


// 🔽 Entrada fornecida
let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas: [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
];

// 🔽 Executa
calcularMediaAtletas(atletas);
