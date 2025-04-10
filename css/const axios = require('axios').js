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
    