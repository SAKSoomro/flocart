import '../index.css'
import Homepage from './Homepage';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Secondpage from './Secondpage';
import Settings from './Settings';
import Payments from './Payments';

export default function App() {

  const navigate = useNavigate()

  const navigateToHomepage = () => {
    navigate('/')
  }

  return (
    <main>
    <Routes>    
      <Route path='/' element={<Homepage />} />
      <Route path='/secondpage' element={<Secondpage />} />
      <Route path='/settings' element={<Settings />} />
      <Route path='/payments' element={<Payments />} />
    </Routes>
    </main>

  );
}
