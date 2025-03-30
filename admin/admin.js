document.addEventListener('DOMContentLoaded', function() {
    const table = document.querySelector('table');
    const adicionarBtn = document.getElementById('adicionar');
    
    // Função para adicionar nova linha
    adicionarBtn.addEventListener('click', function() {
        const newRow = table.insertRow(-1); // Insere no final da tabela
        newRow.innerHTML = `
            <td><input type="text" placeholder="ID"></td>
            <td><input type="text" placeholder="Nome"></td>
            <td><input type="text" placeholder="Tipo"></td>
            <td><input type="number" placeholder="Quantidade"></td>
            <td><input type="text" placeholder="Preço"></td>
            <td>
                <button class="salvar">Salvar</button>
                <button class="cancelar">Cancelar</button>
            </td>
        `;
        
        // Adiciona eventos aos novos botões
        newRow.querySelector('.salvar').addEventListener('click', function() {
            salvarLinha(newRow);
        });
        
        newRow.querySelector('.cancelar').addEventListener('click', function() {
            if(table.rows.length > 2) { // Não remove se for a única linha
                newRow.remove();
            }
        });
    });

    // Delegation para eventos dinâmicos
    table.addEventListener('click', function(e) {
        const target = e.target;
        const row = target.closest('tr');
        
        if(target.classList.contains('editar')) {
            editarLinha(row);
        } 
        else if(target.classList.contains('excluir')) {
            if(confirm('Tem certeza que deseja excluir este item?')) {
                row.remove();
            }
        }
        else if(target.classList.contains('salvar')) {
            salvarLinha(row);
        }
        else if(target.classList.contains('cancelar')) {
            location.reload(); // Recarrega para cancelar edições
        }
    });

    // Função para editar linha
    function editarLinha(row) {
        const cells = row.cells;
        
        for(let i = 0; i < cells.length - 1; i++) { // Exceto a última célula (ações)
            const cellValue = cells[i].textContent;
            cells[i].innerHTML = `<input type="${i === 3 ? 'number' : 'text'}" value="${cellValue}">`;
        }
        
        // Altera os botões para Salvar/Cancelar
        cells[cells.length - 1].innerHTML = `
            <button class="salvar">Salvar</button>
            <button class="cancelar">Cancelar</button>
        `;
    }

    // Função para salvar linha
    function salvarLinha(row) {
        const cells = row.cells;
        let isValid = true;
        
        // Validação básica
        for(let i = 0; i < cells.length - 1; i++) {
            const input = cells[i].querySelector('input');
            if(input && input.value.trim() === '') {
                isValid = false;
                alert('Por favor, preencha todos os campos!');
                break;
            }
        }
        
        if(!isValid) return;
        
        // Salva os valores
        for(let i = 0; i < cells.length - 1; i++) {
            const input = cells[i].querySelector('input');
            if(input) {
                cells[i].textContent = input.value;
            }
        }
        
        // Volta os botões de Editar/Excluir
        cells[cells.length - 1].innerHTML = `
            <button class="editar">Editar</button>
            <button class="excluir">Excluir</button>
        `;
    }
});