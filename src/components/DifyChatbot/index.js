import React, { useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function DifyChatbot() {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    // 设置 Dify 聊天机器人配置
    window.difyChatbotConfig = siteConfig.customFields.difyChatbotConfig;

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
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, [siteConfig]);

  return null;
}