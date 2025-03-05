import { ToastContainer } from 'react-toastify';
import './App.css';
import AppRoutes from './routes/AppRoutes';

function App() {
  return <>
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
    <AppRoutes />
  </>;
}

export default App
