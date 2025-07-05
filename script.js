// Validação do formulário de contato
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();
  
  // Validação básica
  if(!nome || !email) {
    showMessage('Por favor, preencha todos os campos obrigatórios', 'error');
    return;
  }
  
  // Validação de e-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailRegex.test(email)) {
    showMessage('Por favor, insira um e-mail válido', 'error');
    return;
  }
  
  // Simulação de envio
  showMessage('Mensagem enviada com sucesso! Entrarei em contato em breve.', 'success');
  
  // Resetar formulário
  e.target.reset();
});

// Função para exibir mensagens
function showMessage(text, type) {
  // Remover mensagens anteriores
  const existingMessage = document.querySelector('.message');
  if(existingMessage) existingMessage.remove();
  
  // Criar elemento de mensagem
  const message = document.createElement('div');
  message.className = `message message-${type}`;
  message.textContent = text;
  
  // Estilos da mensagem
  message.style.position = 'fixed';
  message.style.top = '20px';
  message.style.left = '50%';
  message.style.transform = 'translateX(-50%)';
  message.style.padding = '15px 25px';
  message.style.borderRadius = '6px';
  message.style.zIndex = '1000';
  message.style.fontWeight = '500';
  message.style.boxShadow = '0 3px 10px rgba(0,0,0,0.15)';
  
  if(type === 'success') {
    message.style.backgroundColor = '#4CAF50';
    message.style.color = 'white';
  } else {
    message.style.backgroundColor = '#f44336';
    message.style.color = 'white';
  }
  
  // Adicionar ao documento
  document.body.appendChild(message);
  
  // Remover após 5 segundos
  setTimeout(() => {
    message.style.opacity = '0';
    message.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
      if(message.parentNode) message.parentNode.removeChild(message);
    }, 500);
  }, 5000);
}

// Suavizar rolagem para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if(targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});