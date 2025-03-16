// Script para identificar elementos que causam overflow horizontal
document.addEventListener('DOMContentLoaded', function() {
  // Obter a largura da viewport
  const viewportWidth = window.innerWidth;
  
  // Função para verificar todos os elementos
  function checkOverflow() {
    const allElements = document.querySelectorAll('*');
    let overflowElements = [];
    
    allElements.forEach(element => {
      const rect = element.getBoundingClientRect();
      
      // Se o elemento for mais largo que a viewport ou se estender além da borda direita
      if (rect.width > viewportWidth || rect.right > viewportWidth) {
        overflowElements.push({
          element: element,
          tagName: element.tagName,
          id: element.id,
          className: element.className,
          width: rect.width,
          right: rect.right,
          overflowAmount: Math.max(rect.right - viewportWidth, rect.width - viewportWidth)
        });
      }
    });
    
    // Ordenar por quantidade de overflow (do maior para o menor)
    overflowElements.sort((a, b) => b.overflowAmount - a.overflowAmount);
    
    // Mostrar os 10 elementos com maior overflow
    console.log('=== ELEMENTOS CAUSANDO OVERFLOW HORIZONTAL ===');
    console.log(`Largura da viewport: ${viewportWidth}px`);
    
    if (overflowElements.length === 0) {
      console.log('Nenhum elemento com overflow encontrado.');
    } else {
      overflowElements.slice(0, 10).forEach((item, index) => {
        console.log(`${index + 1}. ${item.tagName}${item.id ? ' #' + item.id : ''}${item.className ? ' .' + item.className.replace(/ /g, '.') : ''}`);
        console.log(`   Largura: ${item.width}px, Posição direita: ${item.right}px, Overflow: ${item.overflowAmount}px`);
        console.log(`   Elemento:`, item.element);
        
        // Destacar visualmente o elemento
        item.element.style.outline = `${index + 1}px solid rgba(255, 0, 0, ${0.9 - (index * 0.1)})`;
      });
    }
  }
  
  // Executar a verificação após um pequeno atraso para garantir que tudo foi carregado
  setTimeout(checkOverflow, 1000);
  
  // Adicionar botão para executar a verificação novamente
  const debugButton = document.createElement('button');
  debugButton.textContent = 'Verificar Overflow';
  debugButton.style.position = 'fixed';
  debugButton.style.bottom = '10px';
  debugButton.style.right = '10px';
  debugButton.style.zIndex = '9999';
  debugButton.style.padding = '8px';
  debugButton.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  debugButton.style.color = 'white';
  debugButton.style.border = 'none';
  debugButton.style.borderRadius = '4px';
  debugButton.addEventListener('click', checkOverflow);
  
  document.body.appendChild(debugButton);
});
