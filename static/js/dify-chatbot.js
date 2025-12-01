window.difyChatbotConfig = {
    token: 'I4xmdhCOsfJ3jMiC',
    baseUrl: 'https://dify.oraclestar.cn',
    inputs: {},
    systemVariables: {},
    userVariables: {},
};

(function() {
    const script = document.createElement('script');
    script.src = 'https://dify.oraclestar.cn/embed.min.js';
    script.id = 'I4xmdhCOsfJ3jMiC';
    script.defer = true;
    document.head.appendChild(script);
    
    const style = document.createElement('style');
    style.textContent = `
        #dify-chatbot-bubble-button {
            background-color: #1C64F2 !important;
        }
        #dify-chatbot-bubble-window {
            width: 24rem !important;
            height: 40rem !important;
            position: fixed !important;
            bottom: 80px !important;
            right: 20px !important;
            max-height: 70vh !important;
            overflow-y: auto !important;
        }
    `;
    document.head.appendChild(style);
})();