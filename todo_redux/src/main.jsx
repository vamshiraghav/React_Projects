import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { store } from './app/store'; // Import the store
import { Provider } from 'react-redux'; // Import the Provider
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
