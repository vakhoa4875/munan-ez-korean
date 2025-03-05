import { Button } from 'primereact/button';
import { toast } from 'react-toastify';
import './App.css';


function App() {

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    toast('Dark mode changed');
  }

  return (
    <>
      <div className='card h-screen flex justify-center items-center'>
        <Button label="Toggle Dark Mode" onClick={toggleDarkMode} />
      </div>
    </>
  )
}

export default App
