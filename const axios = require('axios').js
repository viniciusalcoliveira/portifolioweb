window.botpressWebChat.init({
    botId: 'dani',
    hostUrl: 'https://cdn.botpress.cloud/webchat/v2',
    messagingUrl: 'https://messaging.botpress.cloud',
    clientId: 'SEU_CLIENT_ID',
    botName: 'Dani',
    showPoweredBy: false,
    enableTranscriptDownload: false,
    layoutWidth: '300px',       // ⬅️ Largura da janela de chat
    layoutHeight: '400px',      // ⬅️ Altura da janela de chat
    stylesheet: 'https://example.com/custom-chat-style.css', // (opcional)
    avatarUrl: 'https://example.com/avatar.png',
    useSessionStorage: true,
    // outros parâmetros…
  })
  window.addEventListener('load', () => {
    const chatbotButton = document.querySelector('.bpw-floating-button');
    if (chatbotButton) {
      chatbotButton.style.display = 'none';
    }
  });
    const formData = {
  meu_nome: event.payload.name,
  meu_email: event.payload.email,
  meu_telefone: event.payload.phone,
  mensagem: event.payload.message || 'Interesse em serviços'
};
const axios = require('axios');

// Gera um ID único com timestamp
const lead_id = `lead_${event.threadId}_${Date.now()}`;

// Dados capturados no fluxo (ajuste os nomes se forem diferentes)
const formData = {
  meu_nome: event.payload.name || 'Nome não informado',
  meu_email: event.payload.email || 'Email não informado',
  meu_telefone: event.payload.phone || 'Telefone não informado',
  mensagem: event.payload.message || 'Mensagem não informada',
  conversa_id: lead_id
};

try {
 const axios = require('axios')

const { nome, email, telefone, interesse } = event.payload.formData || {}

if (!nome || !email || !telefone || !interesse) {
  return { success: false, message: 'Campos incompletos' }
}

// Enviar os dados para o FormSubmit (que entrega para seu e-mail)
await axios.post('https://formsubmit.co/ajax/viniciusextreme2299@gmail.com', {
  meu_nome: nome,
  meu_email: email,
  meu_telefone: telefone,
  interesse: interesse
}, {
  headers: {
    'Content-Type': 'application/json'
  }
})

return { success: true, message: 'Lead enviado com sucesso!' }
