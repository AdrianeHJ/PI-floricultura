let buqueCount = 1;

function adicionarCarrinho() {
    const floresSelecionadas = [];
    const floresInputs = document.querySelectorAll('input[name="flores"]:checked');
    floresInputs.forEach(input => floresSelecionadas.push(input.value));

    const coresSelecionadas = [];
    const coresInputs = document.querySelectorAll('input[name="cores"]:checked');
    coresInputs.forEach(input => coresSelecionadas.push(input.value));

    const tamanhoSelecionado = document.querySelector('input[name="tamanho-1"]:checked') ? document.querySelector('input[name="tamanho-1"]:checked').value : 'Não selecionado';
    const presentesSelecionados = [];
    const presentesInputs = document.querySelectorAll('input[name="presentes-1"]:checked');
    presentesInputs.forEach(input => presentesSelecionados.push(input.value));

    console.log(`Buquê 1: Flores selecionadas: ${floresSelecionadas.join(', ')}`);
    console.log(`Cores selecionadas: ${coresSelecionadas.join(', ')}`);
    console.log(`Tamanho selecionado: ${tamanhoSelecionado}`);
    console.log(`Presentes selecionados: ${presentesSelecionados.join(', ')}`);

    alert('Seu presente foi adicionado ao carrinho!');
}

function adicionarBuque() {
    buqueCount++;

    const novaPersonalizacao = document.querySelector('.personalizacao').cloneNode(true);
    novaPersonalizacao.querySelector('.titulo-buque').innerText = `Buquê ${buqueCount}`;

    // Atualizar os nomes dos inputs para garantir que são únicos
    const inputs = novaPersonalizacao.querySelectorAll('input');
    inputs.forEach(input => {
        if (input.name.includes('1')) {
            input.name = input.name.replace('1', buqueCount);
        }
    });

    const container = document.querySelector('.container');
    container.insertBefore(novaPersonalizacao, container.lastElementChild);
}

function removerBuque(button) {
    const buque = button.closest('.buque');
    buque.remove();
}
