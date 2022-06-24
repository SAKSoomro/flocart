import '../index.css'
import Homepage from './Homepage';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Secondpage from './Secondpage';
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
    </Routes>
    </main>

  );
}
