const ordem = 3;

document.addEventListener('DOMContentLoaded', () => {
    insereTabela();
});

function insereTabela() {
    const tabela = document.createElement('table');
    tabela.id = 'quadradomagico'
    document.body.append(tabela);
    for (let i=0; i<ordem; i++){
        const linha = document.createElement('tr');
        tabela.append(linha);
        for (let j=0; j<ordem; j++) {
            const celula = document.createElement('td');
            linha.append(celula);
            celula.id = `lin${i}col${j}`;
            insereInput(celula);
        }
    }
}

function insereInput(celula){
    const input = document.createElement('input');
    celula.append(input);
}
