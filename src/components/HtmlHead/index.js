import React from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function HtmlHead() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Head>
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            window.difyChatbotConfig = ${JSON.stringify(siteConfig.customFields.difyChatbotConfig)};
          `,
        }}
      />
      <style>
        {`
          #dify-chatbot-bubble-button {
            background-color: #1C64F2 !important;
          }
          #dify-chatbot-bubble-window {
            width: 24rem !important;
            height: 40rem !important;
          }
        `}
      </style>
    </Head>
  );
}