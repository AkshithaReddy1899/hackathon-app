import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Main from './components/Main';
import Form from './components/Form';

function App() {
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
