import React, { useEffect } from 'react';
import Layout from '@theme-original/Layout';

export default function LayoutWrapper(props) {
  useEffect(() => {
    // 设置 Dify 聊天机器人配置
    window.difyChatbotConfig = {
      token: 'I4xmdhCOsfJ3jMiC',
      baseUrl: 'https://dify.oraclestar.cn',
      inputs: {
        // You can define the inputs from the Start node here
        // key is the variable name
        // e.g.
        // name: "NAME"
      },
      systemVariables: {
        // user_id: 'YOU CAN DEFINE USER ID HERE',
        // conversation_id: 'YOU CAN DEFINE CONVERSATION ID HERE, IT MUST BE A VALID UUID',
      },
      userVariables: {
        // avatar_url: 'YOU CAN DEFINE USER AVATAR URL HERE',
        // name: 'YOU CAN DEFINE USER NAME HERE',
      },
    };

    // 创建并添加脚本
    const script = document.createElement('script');
    script.src = 'https://dify.oraclestar.cn/embed.min.js';
    script.id = 'I4xmdhCOsfJ3jMiC';
    script.defer = true;
    document.head.appendChild(script);

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

    // 清理函数
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return (
    <>
      <Layout {...props} />
    </>
  );
}