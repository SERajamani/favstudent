import Fav from './components/Fav';
import List from './components/List';
import Context from './components/Contents';

import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
function App() {

  return (
    <Context>
      <BrowserRouter>
        <nav className="bg-red-300 p-10 border rounded-md flex flex-row gap-10 text-center">
          <div><Link to={"/"} className='underline text-white'>List of Students</Link>
          </div>
          <div>
            <Link to={"/fav"} className='underline text-white'>Favourite Students</Link>
          </div>

        </nav>
        <Routes>
          <Route path='/' element={<List />}></Route>
          <Route path='/fav' element={<Fav />}></Route>
        </Routes>
      </BrowserRouter>
    </Context>

  );
}

export default App;