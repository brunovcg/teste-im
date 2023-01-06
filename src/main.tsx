import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClientProvider, QueryClient } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import i18n from './locale/i18n';
import { I18nextProvider } from 'react-i18next';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <App />
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryClientProvider>
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);
