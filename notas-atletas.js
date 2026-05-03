function calcularMediaAtletas(atletas) {

    for (let atleta of atletas) {

        
        let notasOrdenadas = [...atleta.notas].sort((a, b) => a - b);

        let notasValidas = notasOrdenadas.slice(1, notasOrdenadas.length - 1);

   
        let soma = 0;
        for (let nota of notasValidas) {
            soma += nota;
        }

      
        let media = soma / notasValidas.length;

        console.log(`Atleta: ${atleta.nome}`);
        console.log(`Notas Obtidas: ${atleta.notas}`);
        console.log(`Média Válida: ${media.toFixed(6)}\n`);
    }
}



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


calcularMediaAtletas(atletas);
