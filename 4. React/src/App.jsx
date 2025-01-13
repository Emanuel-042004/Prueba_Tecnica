import 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Formulario from './components/Formulario';
import ListaFormularios from './components/ListaFormularios';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Formulario />} />
          <Route path="/lista" element={<ListaFormularios />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
