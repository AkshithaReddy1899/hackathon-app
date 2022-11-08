import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Nav from './components/Nav';
import Main from './components/Main';
import Details from './components/Detail';
import Create from './components/Create';
import Update from './components/Update';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const state = useSelector((state) => state.dataReducer);
  console.log(state);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/details" element={<Details />} />
        <Route path="/new-hackathon" element={<Create />} />
        <Route path="/update-hackathon" element={<Update />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
