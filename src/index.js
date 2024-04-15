import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppContextProvider } from './context/AppContext';
import { ClerkProvider } from '@clerk/clerk-react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey='pk_test_c3VwcmVtZS1sYWJyYWRvci00OS5jbGVyay5hY2NvdW50cy5kZXYk'>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </ClerkProvider>
  </React.StrictMode>
);
