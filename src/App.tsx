import React from 'react';
import { KeycloakProvider } from './contexts/KeycloakContext';
import './App.css';

// Components
import { ToastContainer } from 'react-toastify';
import AppRoutes from './routes/AppRoutes';
import { ConfirmDialog } from 'primereact/confirmdialog';

const App: React.FC = () => {
  return (
    <>
      <ConfirmDialog />
      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <KeycloakProvider>
        <AppRoutes />
      </KeycloakProvider>
    </>
  );
};

export default App;