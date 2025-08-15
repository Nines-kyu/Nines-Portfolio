import './App.css';
import Navigation from './components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <Navigation />

        <main className='flex-grow flex'>
          <Outlet />
        </main>

      </div>
    </>
  )
}

export default App
