import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClientProvider, QueryClient } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import App from './App';
import i18n from './locale/i18n';
import StorageProvider from '@/context/storage-context/StorageContext';
import GlobalStyle from './styles/GlobalStyles';
import getEviroment from '@/configs/enviroments';
import imConstants from './constants/imContants';

const queryClient = new QueryClient();
const { PRODUCTION } = imConstants.enviroments;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <StorageProvider>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <App />
            <GlobalStyle />
            {getEviroment().name !== PRODUCTION && <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />}
          </QueryClientProvider>
        </BrowserRouter>
      </StorageProvider>
    </I18nextProvider>
  </React.StrictMode>
);
