import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Nav from './components/Nav';
import Main from './components/Main';
import Form from './components/Form';

function App() {
  const state = useSelector((state) => state.dataReducer);
  console.log(state);
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
