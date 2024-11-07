import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from '../src/components/App/App.jsx';
import 'modern-normalize';
import './assets/fonts/fonts.css';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />  
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
