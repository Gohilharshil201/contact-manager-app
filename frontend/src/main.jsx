import React from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd';
import App from './App.jsx';
import 'antd/dist/reset.css'; // Reset styles from AntD
import './index.css'; // Your global styles (if needed)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1677ff', // Optional: Customize AntD primary color
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
