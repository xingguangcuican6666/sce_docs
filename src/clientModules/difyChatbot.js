// 设置 Dify 聊天机器人配置
window.difyChatbotConfig = {
  token: 'I4xmdhCOsfJ3jMiC',
  baseUrl: 'https://dify.oraclestar.cn',
  inputs: {},
  systemVariables: {},
  userVariables: {},
};

// 创建并添加脚本
const script = document.createElement('script');
script.src = 'https://dify.oraclestar.cn/embed.min.js';
script.id = 'I4xmdhCOsfJ3jMiC';
script.defer = true;
document.body.appendChild(script);

// 创建并添加样式
const style = document.createElement('style');
style.textContent = `
  #dify-chatbot-bubble-button {
    background-color: #1C64F2 !important;
  }
  #dify-chatbot-bubble-window {
    width: 24rem !important;
    height: 40rem !important;
  }
`;
document.head.appendChild(style);