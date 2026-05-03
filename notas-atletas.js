function calcularMediaAtletas(atletas) {

    for (let atleta of atletas) {

        // Clona e ordena as notas (usado apenas para cálculo)
        let notasOrdenadas = [...atleta.notas].sort((a, b) => a - b);

        // Remove a menor e a maior nota
        let notasValidas = notasOrdenadas.slice(1, notasOrdenadas.length - 1);

        // Calcula a soma das notas válidas
        let soma = 0;
        for (let nota of notasValidas) {
            soma += nota;
        }

        // Calcula a média
        let media = soma / notasValidas.length;

        // Exibe resultado no formato solicitado
        console.log(`Atleta: ${atleta.nome}`);
        console.log(`Notas Obtidas: ${atleta.notas}`);
        console.log(`Média Válida: ${media.toFixed(6)}\n`);
    }
}


// Dados de entrada
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

// Executa a função
calcularMediaAtletas(atletas);
