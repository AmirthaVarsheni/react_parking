
import { Outlet } from 'react-router-dom';
import './CSS/backgroud.css'
import Header from './components/HFComponents/header';
export default function App() {
  return (
    <div className='bg-animation'>
      <Header />
      <Outlet />  
    </div>
  );
}
