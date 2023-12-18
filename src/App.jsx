import './App.css';
import Landing from './components/Landing'; // Import Tailwind CSS styles
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';


const App = () => {
  return (
<BrowserRouter>
<Routes>
<Route path='/' element={<Landing />}></Route>
<Route path='/registration' element={<RegistrationForm />}></Route>
</Routes>
</BrowserRouter>
  );
};

export default App;