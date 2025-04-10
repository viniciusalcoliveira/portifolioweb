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

const response = await axios.post('https://formsubmit.co/viniciusextreme2299@gmail.com', formData);

if (response.status === 200) {
  bp.logger.info('✅ Lead enviado para o e-mail com sucesso!');
} else {
  bp.logger.warn('⚠️ Falha ao enviar o formulário: ' + response.status);
}
