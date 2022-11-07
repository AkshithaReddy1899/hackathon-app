import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Nav from './components/Nav';
import Main from './components/Main';
import Details from './components/Detail';
import Form from './components/Form';
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
        <Route path="/new-hackathon" element={<Form />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
