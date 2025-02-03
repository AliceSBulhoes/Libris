// Função para formatar a data da API
export const formatDate = (dateString) => {
    // Transforma a data que era string
    // para uma data no javascript
    const date = new Date(dateString);
    
    // Por fim, formata a data para a formatação brasileira
    return date.toLocaleDateString('pt-BR'); 
};