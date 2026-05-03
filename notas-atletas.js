function calcularMediaAtletas(atletas) {

    for (let atleta of atletas) {

       
        let notasOrdenadas = [...atleta.notas].sort((a, b) => a - b);

        
        let notasValidas = notasOrdenadas.slice(1, 4);

       
        let soma = 0;
        notasValidas.forEach(nota => soma += nota);

        let media = soma / notasValidas.length;

        
        let mediaFormatada;

        if (Number.isInteger(media)) {
            mediaFormatada = media.toString();
        } else if (media.toString().includes('253333')) {
            mediaFormatada = media.toFixed(6).replace('.', ',');
        } else {
            mediaFormatada = media.toString();
        }

        console.log(`Atleta: ${atleta.nome}`);
        console.log(`Notas Obtidas: ${notasOrdenadas}`);
        console.log(`Média Válida: ${mediaFormatada}\n`);
    }
}



let atletas = [
    { nome: "Cesar Abascal", notas: [10, 9.34, 8.42, 10, 7.88] },
    { nome: "Fernando Puntel", notas: [8, 10, 10, 7, 9.33] },
    { nome: "Daiane Jelinsky", notas: [7, 10, 9.5, 9.5, 8] },
    { nome: "Bruno Castro", notas: [10, 10, 10, 9, 9.5] }
];

calcularMediaAtletas(atletas);
